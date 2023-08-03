export default {
    
    'duplicate-button': true,

    graphql: {
        config: {
            endpoint: "/graphql",
            shadowCRUD: true,
            playgroundAlways: false,
            depthLimit: 20,
            amountLimit: 100,
            apolloServer: {
                tracing: false,
            },
        },
    },

    'publisher': {
        enabled: true,
        config: {
          hooks: {
            beforePublish: async ({ strapi, uid, entity }) => {
              console.log('beforePublish');
            },
            afterPublish: async ({ strapi, uid, entity }) => {
              console.log('afterPublish');
            },
            beforeUnpublish: async ({ strapi, uid, entity }) => {
              console.log('beforeUnpublish');
            },
            afterUnpublish: async ({ strapi, uid, entity }) => {
              console.log('afterUnpublish');
            },
          },
        },
      },
}