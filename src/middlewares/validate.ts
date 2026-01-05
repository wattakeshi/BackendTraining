import type { Request, Response, NextFunction } from "express";
import type { ZodSchema } from "zod/v3";

export const validate = (schema: ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({
                message: "Validation Error",
                details: result.error.format()
            });
        }
        req.body = result.data;
        next();
    }
}