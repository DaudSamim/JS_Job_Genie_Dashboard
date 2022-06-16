import multer from 'multer';
import path from 'path';

const storageForMedia = multer.diskStorage({
  destination: './public/uploads/media/challenges',
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

const UploadMedia = multer({ storage: storageForMedia });

export { UploadMedia };
