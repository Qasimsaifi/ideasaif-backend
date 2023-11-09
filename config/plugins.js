module.exports = ({ env }) => ({
  "file-system": {
    enabled: true,
  },
  // "strapi-plugin-lottie": {
  //   enabled: true,
  // },
  'editorjs': {
    enabled: true,
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});
