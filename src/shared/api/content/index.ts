import { privateConfig } from "@/shared/config/private";
import { FileFetcher } from "./_lib/file-fetcher";
import { ContentApi } from "./_content-api";
import {
  ReactQueryCacheStrategy,
  DummyCacheStrategy,
} from "./_lib/cache-strategy";
import { ContentParser } from "./_lib/content-parser";
import manifestSchema from "./_schemas/manifest.schema.json";
import { Manifest } from "./_schemas/manifest.schema";

const fileFetcher = new FileFetcher(privateConfig.CONTENT_TOKEN);
const contentParser = new ContentParser();
const reactQueryCacheStrategy = new ReactQueryCacheStrategy();
const dummyCacheStrategy = new DummyCacheStrategy();

export const contentApi = new ContentApi(privateConfig.CONTENT_URL, {
  cacheStrategy:
    process.env.NODE_ENV === "development"
      ? dummyCacheStrategy
      : reactQueryCacheStrategy,
  contentParser,
  fileFetcher,
});
