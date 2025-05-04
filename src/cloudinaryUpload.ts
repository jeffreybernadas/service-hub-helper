import cloudinary, {
  UploadApiErrorResponse,
  UploadApiResponse,
} from "cloudinary";

type CloudinaryResponse = Promise<
  UploadApiResponse | UploadApiErrorResponse | undefined
>;

// Generalized async upload function for different resource types
const uploadToCloudinary = async (
  file: string,
  resource_type: "auto" | "video",
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean,
  chunk_size?: number
): CloudinaryResponse => {
  try {
    return await cloudinary.v2.uploader.upload(file, {
      public_id,
      overwrite,
      invalidate,
      resource_type,
      chunk_size,
    });
  } catch (error) {
    return error as UploadApiErrorResponse;
  }
};

// Async function for general file uploads
export const cloudinaryFileUpload = async (
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> => {
  return await uploadToCloudinary(
    file,
    "auto",
    public_id,
    overwrite,
    invalidate
  );
};

// Async function for video uploads with chunk size
export const cloudinaryVideoUpload = async (
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> => {
  return await uploadToCloudinary(
    file,
    "video",
    public_id,
    overwrite,
    invalidate,
    50000
  );
};
