const path = require('path')


require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const siteMetadata = {
  title: `Speak Your Truth`,
    name: `PNG x YONKO Productions`,
    siteUrl: `https://speakyourtruth.me`,
    description: `A space for Black communities and Allies to shed light on personal experiences of racial injustice and to reflect on the recognition of its impact on society.`,
    hero: {
      heading: `A space for Black communities and Allies to shed light on personal experiences of racial injustice and to reflect on the recognition of its impact on society. 
      `,
      maxWidth: 1000,
    },
    social: [
    //  {
    //    name: `twitter`,
    //    url: `https://twitter.com/narative`,
    //  },
    //  {
    //    name: `github`,
    //    url: `https://github.com/narative`,
    //  },
    {
      name: `instagram`,
      url: `https://instagram.com/passionnurturesgrowth`,
    },
    {
      name: `instagram`,
      url: `https://instagram.com/yonkosteez`,
    },

    //  {
    //    name: `linkedin`,
    //    url: `https://www.linkedin.com/company/narative/`,
    //  },
    //  {
    //    name: `dribbble`,
    //    url: `https://dribbble.com/narativestudio`,
    //  },
  ],
};

const plugins = [
  {
    resolve: "@narative/gatsby-theme-novela",
    options: {
      contentPosts: "content/posts",
      contentAuthors: "content/authors",
      rootPath: "/",
      basePath: "/",
      authorsPage: true,
      mailchimp: true,
      disqus: true,
      pageLength: 8,
      tags: true,
      sources: {
        local: true,
        contentful: false,
      },
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'assets',
      path: `${__dirname}/static/`
    }
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `reckoning.dev`,
      short_name: `reckoning`,
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `#fff`,
      display: `standalone`,
      icon: `src/assets/text.png`,
    },
  },
  {
    resolve: `gatsby-plugin-google-tagmanager`,
    options: {
      id: "GTM-N5WTB5W",

      // Include GTM in development.
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: true,
    },
  },
  {
    resolve: 'gatsby-plugin-disqus',
    options: {
      shortname: 'speakyourtruth',
    }, 
  },
  {
    resolve: `gatsby-source-shopify`,
    options: {
      // The domain name of your Shopify shop. This is required.
      // Example: 'gatsby-source-shopify-test-shop' if your Shopify address is
      // 'gatsby-source-shopify-test-shop.myshopify.com'.
      shopName: process.env.SHOP_NAME,

      // An API access token to your Shopify shop. This is required.
      // You can generate an access token in the "Manage private apps" section
      // of your shop's Apps settings. In the Storefront API section, be sure
      // to select "Allow this app to access your storefront data using the
      // Storefront API".
      // See: https://help.shopify.com/api/custom-storefronts/storefront-api/getting-started#authentication
      accessToken: process.env.SHOPIFY_ACCESS_TOKEN,

      // Set verbose to true to display a verbose output on `npm run develop`
      // or `npm run build`. This prints which nodes are being fetched and how
      // much time was required to fetch and process the data.
      // Defaults to true.
      verbose: true,
    },
  },
  {
    resolve: "gatsby-plugin-mailchimp",
    options: {
      endpoint:
        "https://passionnurturesgrowth.us10.list-manage.com/subscribe/post?u=e68d002116dc2e9d4570cf4ac&amp;id=af4cafb7d6",
    },
  },
];

module.exports = {
  siteMetadata,
  plugins,
};
