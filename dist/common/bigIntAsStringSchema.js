import { z } from "zod";
export const bigIntAsStringSchema = z.bigint().transform((id) => id.toString());
