import { Fragment, type ReactNode } from "react";

export type JsonLdGraphRoot = {
  "@context": "https://schema.org";
  "@graph": Record<string, unknown>[];
};

function isGraphRoot(v: unknown): v is JsonLdGraphRoot {
  return (
    typeof v === "object" &&
    v !== null &&
    (v as JsonLdGraphRoot)["@context"] === "https://schema.org" &&
    Array.isArray((v as JsonLdGraphRoot)["@graph"])
  );
}

function extractGraphNodes(input: unknown): Record<string, unknown>[] {
  if (isGraphRoot(input)) return [...input["@graph"]];
  if (typeof input === "object" && input !== null) {
    return [input as Record<string, unknown>];
  }
  return [];
}

/**
 * Merges multiple schema payloads into one `@graph`.
 * When the same `@id` appears more than once, later nodes replace earlier ones.
 */
export function mergeSchemas(...parts: unknown[]): JsonLdGraphRoot {
  const byId = new Map<string, Record<string, unknown>>();
  const anonymous: Record<string, unknown>[] = [];

  for (const part of parts) {
    for (const node of extractGraphNodes(part)) {
      const id = node["@id"];
      if (typeof id === "string" && id.length > 0) {
        byId.set(id, node);
      } else {
        anonymous.push(node);
      }
    }
  }

  return {
    "@context": "https://schema.org",
    "@graph": [...byId.values(), ...anonymous],
  };
}

/** Safe inside `<script type="application/ld+json">` (avoids breaking out with `<`). */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export type JsonLdScriptProps = {
  id?: string;
  /** Single node, full graph object, or array of nodes to merge */
  schema: unknown | unknown[];
};

/**
 * Renders one JSON-LD script. Pass multiple nodes via `mergeSchemas` first, or use `JsonLdScripts` for separate keys.
 */
export function JsonLdScript({ id, schema }: JsonLdScriptProps): ReactNode {
  const parts = Array.isArray(schema) ? schema : [schema];
  const data = mergeSchemas(...parts);
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}

export type JsonLdScriptsProps = {
  /** Each entry becomes its own script tag so crawlers still see discrete blocks; merge within a block via mergeSchemas. */
  blocks: { id: string; schema: unknown }[];
};

/**
 * Multiple script tags with stable `id`s so React hydration does not duplicate the same block,
 * and layout vs page additions remain explicit (no accidental double-merge of the same @id in one tag).
 */
export function JsonLdScripts({ blocks }: JsonLdScriptsProps): ReactNode {
  return (
    <>
      {blocks.map((b) => (
        <Fragment key={b.id}>
          <JsonLdScript id={b.id} schema={b.schema} />
        </Fragment>
      ))}
    </>
  );
}
