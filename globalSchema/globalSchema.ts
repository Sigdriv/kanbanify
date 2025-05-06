import { z } from 'zod';

export function globalSchema() {
  const createStringSchema = (label: string, min: number, max: number) => {
    let stringSchema = z.string({
      invalid_type_error: `${label} is required`,
      required_error: `${label} is required`,
    });

    if (max === min) {
      stringSchema = stringSchema
        .min(1, { message: `${label} is required` })
        .length(max, {
          message: `${label} must be exactly ${max} characters`,
        });
    } else {
      stringSchema = stringSchema.max(max, {
        message: `${label} cannot be at more than ${max} characters`,
      });
    }

    if (max !== min && min > 0) {
      stringSchema = stringSchema.min(min, {
        message:
          min === 1
            ? `${label} is required`
            : `${label} must be at least ${min} characters`,
      });
    }

    return stringSchema;
  };

  return {
    createStringSchema,
  };
}
