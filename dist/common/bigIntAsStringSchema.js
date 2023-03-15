import { z } from "zod";
export const bigIntAsStringSchema = z
    .bigint()
    .or(z.string())
    .transform((id) => id.toString());
