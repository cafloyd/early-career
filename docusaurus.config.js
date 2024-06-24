// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Career Advice for Devs",
  tagline: "Advice for finding your first tech role and beyond",
  url: "https://imaginative-tulumba-10895f.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/CaitlinFloydLogo.png",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: "https://github.com/cafloyd/early-career/tree/main/"
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Career Advice for Devs",
        logo: {
          alt: "Caitlin Floyd logo",
          src: "img/CaitlinFloydLogo.png",
        },
        items: [
          {
            to: '/early-career',
            label: 'Job Hunting',
            position: 'left',
          },
          {
            to: '/career-dev',
            label: 'Career Development',
            position: 'left',
          }
        ]
      },
      footer: {
        style: "light",
        copyright:`<div>© ${new Date().getFullYear()} <a href="https://caitlinfloyd.com" target="_blank"> Caitlin Floyd</a></div>`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
