// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Tips & Resources for Early-Career Devs",
  tagline: "Advice for finding your first tech role",
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
        title: "Tips & Resources for Early-Career Devs",
        logo: {
          alt: "Caitlin Floyd logo",
          src: "img/CaitlinFloydLogo.png",
        }
      },
      footer: {
        style: "light",
        copyright:`<div>© ${new Date().getFullYear()} <a href="https://caitlinfloyd.com" target="_blank"> Caitlin Floyd</a> (<a href="https://github.com/cafloyd/early-career" target="_blank">open source</a>)</div>`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
