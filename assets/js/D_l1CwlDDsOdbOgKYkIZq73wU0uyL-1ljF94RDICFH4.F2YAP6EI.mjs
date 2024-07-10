import { a as I } from "./chunk-XIS46L3B.mjs";
import { a as e, b as a } from "./chunk-F2OBLMT4.mjs";
import {
  B as o,
  G as X,
  I as p,
  J as L,
  K as n,
  L as i,
  M as P,
  b as r,
  d as M,
  f as Y,
  g as D,
  h as c,
  j as Z,
  k as j,
  p as B,
  r as g,
  w as T,
  x as A,
  y as O,
  z as f,
} from "./chunk-O35GRL35.mjs";
import "./chunk-ELYU6EKT.mjs";
L.loadFonts([]);
var _ = [],
  $ = [
    ".framer-s6BUr .framer-styles-preset-1txdslu:not(.rich-text-wrapper), .framer-s6BUr .framer-styles-preset-1txdslu.rich-text-wrapper a { --framer-link-current-text-color: #111111; --framer-link-current-text-decoration: underline; --framer-link-hover-text-color: #0088ff; --framer-link-hover-text-decoration: underline; --framer-link-text-color: #ffffff; --framer-link-text-decoration: none; }",
  ],
  K = "framer-s6BUr";
var be = {
    tiAv0zJqn: "(max-width: 809px)",
    WQLkyLRf1: "(min-width: 1440px)",
    Z044CjP48: "(min-width: 810px) and (max-width: 1439px)",
  },
  ee = () => typeof document < "u",
  re = "framer-8oykG",
  ke = {
    tiAv0zJqn: "framer-v-1um2g67",
    WQLkyLRf1: "framer-v-72rtr7",
    Z044CjP48: "framer-v-1qws17d",
  },
  ve = { default: { duration: 0 } },
  l = (s, m) => `translateX(-50%) ${m}`,
  Q = (s, m) => `translate(-50%, -50%) ${m}`,
  Ce = (s, m) => `${m} rotate(-152deg)`,
  Ge = (s, m) => `${m} rotate(-143deg)`,
  Re = (s, m) => `${m} rotate(46deg)`,
  Ne = (s, m) => `translateY(-50%) ${m} rotate(46deg)`,
  Se = (s, m) => `${m} rotate(54deg)`,
  d = (s, m) => `${m} rotate(-104deg)`,
  w = (s, m) => `${m} rotate(150deg)`,
  b = (s, m) => `${m} rotate(-120deg)`,
  k = (s, m) => `${m} rotate(-41deg)`,
  v = (s, m) => `${m} rotate(-165deg)`,
  C = (s, m) => `${m} rotate(-179deg)`,
  G = (s, m) => `${m} rotate(122deg)`,
  ze = (s, m) => `${m} rotate(7deg)`,
  Ve = (s, m) => `${m} rotate(-169deg)`,
  Fe = (s, m) => `translateY(-50%) ${m} rotate(-169deg)`,
  Ze = (s, m) => `${m} rotate(15deg)`,
  ae = (s, m) => `translate(-50%, -50%) ${m} rotate(-165deg)`,
  je = (s, m) => `${m} rotate(-16deg)`,
  Te = (s, m) => `${m} rotate(-17deg)`,
  Ie = (s, m) => `${m} rotate(-7deg)`,
  Qe = (s, m) => `${m} rotate(78deg)`,
  q = I(),
  qe = { Desktop: "WQLkyLRf1", Phone: "tiAv0zJqn", Tablet: "Z044CjP48" },
  Je = ({ height: s, id: m, width: N, ...y }) => {
    var x, u;
    return {
      ...y,
      variant:
        (u = (x = qe[y.variant]) !== null && x !== void 0 ? x : y.variant) !==
          null && u !== void 0
          ? u
          : "WQLkyLRf1",
    };
  },
  Ee = M(function (s, m) {
    let { activeLocale: N, setLocale: y } = B(),
      { style: x, className: u, layoutId: S, variant: te, ...oe } = Je(s);
    D(() => {
      let h = I(void 0, N);
      if (((document.title = h.title || ""), h.viewport)) {
        var V;
        (V = document.querySelector('meta[name="viewport"]')) === null ||
          V === void 0 ||
          V.setAttribute("content", h.viewport);
      }
      if (h.bodyClassName)
        return (
          Array.from(document.body.classList)
            .filter((F) => F.startsWith("framer-body-"))
            .map((F) => document.body.classList.remove(F)),
          document.body.classList.add(`${h.bodyClassName}-framer-8oykG`),
          () => {
            document.body.classList.remove(`${h.bodyClassName}-framer-8oykG`);
          }
        );
    }, [void 0, N]);
    let [t, Ye] = X(te, be, !1),
      De = void 0,
      Be = ve.default,
      ne = c(null),
      z = () => (t === "tiAv0zJqn" ? !ee() : !0),
      me = g("VN8WrjROx"),
      ie = c(null),
      se = g("PnI1iWzCB"),
      fe = c(null),
      le = g("jKCkCmQLL"),
      ce = c(null),
      pe = g("UoOK0Yqn3"),
      de = c(null),
      ge = g("MI9gUztjo"),
      he = c(null),
      xe = g("LYPgOmFcM"),
      ue = c(null),
      J = () => (t === "tiAv0zJqn" ? !0 : !ee()),
      ye = Y(),
      E = [K];
    return e(O.Provider, {
      value: { primaryVariantId: "WQLkyLRf1", variantClassNames: ke },
      children: a(j, {
        id: S ?? ye,
        children: [
          a(Z.div, {
            ...oe,
            className: T(re, ...E, "framer-72rtr7", u),
            ref: m ?? ne,
            style: { ...x },
            children: [
              a("div", {
                className: "framer-1s7mdj1",
                "data-border": !0,
                "data-framer-name": "Navbar",
                name: "Navbar",
                children: [
                  e("div", {
                    className: "framer-ixz0en",
                    "data-framer-name": "Nav-Logo",
                    name: "Nav-Logo",
                    children: e(n, {
                      background: {
                        alt: "",
                        fit: "fill",
                        src: "/assets/img/MhrJMX7A9ClMiyNjAckKwnH7hAo.png",
                      },
                      className: "framer-mibkv0",
                      "data-framer-name": "5883",
                      name: "5883",
                    }),
                  }),
                  z() &&
                    a("div", {
                      className: "framer-1s2ffgv hidden-1um2g67",
                      "data-framer-name": "Nav-Menu",
                      name: "Nav-Menu",
                      children: [
                        e(o, {
                          breakpoint: t,
                          overrides: {
                            Z044CjP48: {
                              children: e(r, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO0NvbWljIFNhbnMgTVMgQm9sZA==",
                                    "--framer-font-family":
                                      '"Comic Sans MS Bold", "Comic Sans MS Bold Placeholder", sans-serif',
                                    "--framer-font-size": "24px",
                                    "--framer-letter-spacing": "0px",
                                  },
                                  children: e("span", {
                                    "data-text-fill": "true",
                                    style: {
                                      backgroundImage:
                                        "linear-gradient(rgb(255, 205, 40) 0%, rgb(250, 132, 3) 100%)",
                                    },
                                    children: e(f, {
                                      href: {
                                        hash: ":VN8WrjROx",
                                        webPageId: "augiA20Il",
                                      },
                                      openInNewTab: !1,
                                      smoothScroll: !0,
                                      children: e("a", {
                                        className:
                                          "framer-styles-preset-1txdslu",
                                        "data-styles-preset": "a6BpdyeRp",
                                        children: "HOME",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            },
                          },
                          children: e(i, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO0NvbWljIFNhbnMgTVMgQm9sZA==",
                                  "--framer-font-family":
                                    '"Comic Sans MS Bold", "Comic Sans MS Bold Placeholder", sans-serif',
                                  "--framer-font-size": "28px",
                                  "--framer-letter-spacing": "0px",
                                },
                                children: e("span", {
                                  "data-text-fill": "true",
                                  style: {
                                    backgroundImage:
                                      "linear-gradient(rgb(255, 205, 40) 0%, rgb(250, 132, 3) 100%)",
                                  },
                                  children: e(f, {
                                    href: {
                                      hash: ":VN8WrjROx",
                                      webPageId: "augiA20Il",
                                    },
                                    openInNewTab: !1,
                                    smoothScroll: !0,
                                    children: e("a", {
                                      className: "framer-styles-preset-1txdslu",
                                      "data-styles-preset": "a6BpdyeRp",
                                      children: "HOME",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-1mygvx",
                            "data-framer-name": "HOME",
                            fonts: ["CUSTOM;Comic Sans MS Bold"],
                            name: "HOME",
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(o, {
                          breakpoint: t,
                          overrides: {
                            Z044CjP48: {
                              children: e(r, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO0NvbWljIFNhbnMgTVMgQm9sZA==",
                                    "--framer-font-family":
                                      '"Comic Sans MS Bold", "Comic Sans MS Bold Placeholder", sans-serif',
                                    "--framer-font-size": "24px",
                                    "--framer-letter-spacing": "0px",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children: e(f, {
                                    href: {
                                      hash: ":jKCkCmQLL",
                                      webPageId: "augiA20Il",
                                    },
                                    openInNewTab: !1,
                                    smoothScroll: !0,
                                    children: e("a", {
                                      className: "framer-styles-preset-1txdslu",
                                      "data-styles-preset": "a6BpdyeRp",
                                      children: "ABOUT",
                                    }),
                                  }),
                                }),
                              }),
                            },
                          },
                          children: e(i, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO0NvbWljIFNhbnMgTVMgQm9sZA==",
                                  "--framer-font-family":
                                    '"Comic Sans MS Bold", "Comic Sans MS Bold Placeholder", sans-serif',
                                  "--framer-font-size": "28px",
                                  "--framer-letter-spacing": "0px",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                },
                                children: e(f, {
                                  href: {
                                    hash: ":jKCkCmQLL",
                                    webPageId: "augiA20Il",
                                  },
                                  openInNewTab: !1,
                                  smoothScroll: !0,
                                  children: e("a", {
                                    className: "framer-styles-preset-1txdslu",
                                    "data-styles-preset": "a6BpdyeRp",
                                    children: "ABOUT",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-1ekbntx",
                            "data-framer-name": "ABOUT",
                            fonts: ["CUSTOM;Comic Sans MS Bold"],
                            name: "ABOUT",
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(o, {
                          breakpoint: t,
                          overrides: {
                            Z044CjP48: {
                              children: e(r, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO0NvbWljIFNhbnMgTVMgQm9sZA==",
                                    "--framer-font-family":
                                      '"Comic Sans MS Bold", "Comic Sans MS Bold Placeholder", sans-serif',
                                    "--framer-font-size": "24px",
                                    "--framer-letter-spacing": "0px",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children: e(f, {
                                    href: {
                                      hash: ":MI9gUztjo",
                                      webPageId: "augiA20Il",
                                    },
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e("a", {
                                      className: "framer-styles-preset-1txdslu",
                                      "data-styles-preset": "a6BpdyeRp",
                                      children: "JOIN",
                                    }),
                                  }),
                                }),
                              }),
                            },
                          },
                          children: e(i, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO0NvbWljIFNhbnMgTVMgQm9sZA==",
                                  "--framer-font-family":
                                    '"Comic Sans MS Bold", "Comic Sans MS Bold Placeholder", sans-serif',
                                  "--framer-font-size": "28px",
                                  "--framer-letter-spacing": "0px",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                },
                                children: e(f, {
                                  href: {
                                    hash: ":MI9gUztjo",
                                    webPageId: "augiA20Il",
                                  },
                                  openInNewTab: !1,
                                  smoothScroll: !1,
                                  children: e("a", {
                                    className: "framer-styles-preset-1txdslu",
                                    "data-styles-preset": "a6BpdyeRp",
                                    children: "JOIN",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-fyu7hv",
                            "data-framer-name": "JOIN",
                            fonts: ["CUSTOM;Comic Sans MS Bold"],
                            name: "JOIN",
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(o, {
                          breakpoint: t,
                          overrides: {
                            Z044CjP48: {
                              children: e(r, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO0NvbWljIFNhbnMgTVMgQm9sZA==",
                                    "--framer-font-family":
                                      '"Comic Sans MS Bold", "Comic Sans MS Bold Placeholder", sans-serif',
                                    "--framer-font-size": "24px",
                                    "--framer-letter-spacing": "0px",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children: e(f, {
                                    href: {
                                      hash: ":UoOK0Yqn3",
                                      webPageId: "augiA20Il",
                                    },
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e("a", {
                                      className: "framer-styles-preset-1txdslu",
                                      "data-styles-preset": "a6BpdyeRp",
                                      children: "BUY",
                                    }),
                                  }),
                                }),
                              }),
                            },
                          },
                          children: e(i, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO0NvbWljIFNhbnMgTVMgQm9sZA==",
                                  "--framer-font-family":
                                    '"Comic Sans MS Bold", "Comic Sans MS Bold Placeholder", sans-serif',
                                  "--framer-font-size": "28px",
                                  "--framer-letter-spacing": "0px",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                },
                                children: e(f, {
                                  href: {
                                    hash: ":UoOK0Yqn3",
                                    webPageId: "augiA20Il",
                                  },
                                  openInNewTab: !1,
                                  smoothScroll: !1,
                                  children: e("a", {
                                    className: "framer-styles-preset-1txdslu",
                                    "data-styles-preset": "a6BpdyeRp",
                                    children: "BUY",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-b0w4n2",
                            "data-framer-name": "BUY",
                            fonts: ["CUSTOM;Comic Sans MS Bold"],
                            name: "BUY",
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                  e("div", {
                    className: "framer-r1fcjk",
                    "data-border": !0,
                    "data-framer-name": "Nav-Button",
                    name: "Nav-Button",
                    children: e("div", {
                      className: "framer-teuihw",
                      "data-framer-name": "button",
                      name: "button",
                      children: e(o, {
                        breakpoint: t,
                        overrides: {
                          tiAv0zJqn: {
                            children: e(r, {
                              children: e("a", {
                                href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xxxxxxxxxxxxxxxx&chain=mainnet",
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO0NvbWljIFNhbnMgTVMgQm9sZA==",
                                  "--framer-font-family":
                                    '"Comic Sans MS Bold", "Comic Sans MS Bold Placeholder", sans-serif',
                                  "--framer-letter-spacing": "-0.04em",
                                  "--framer-line-height": "100%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                  "--framer-text-transform": "uppercase",
                                },
                                children: "BUY $tacoCAT",
                              }),
                            }),
                            transformTemplate: Q,
                          },
                          Z044CjP48: {
                            children: e(r, {
                              children: e("a", {
                                href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xxxxxxxxxxxxxxxx&chain=mainnet",
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO0NvbWljIFNhbnMgTVMgQm9sZA==",
                                  "--framer-font-family":
                                    '"Comic Sans MS Bold", "Comic Sans MS Bold Placeholder", sans-serif',
                                  "--framer-font-size": "22px",
                                  "--framer-letter-spacing": "-0.04em",
                                  "--framer-line-height": "100%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                  "--framer-text-transform": "uppercase",
                                },
                                children: "BUY $tacoCAT",
                              }),
                            }),
                            transformTemplate: Q,
                          },
                        },
                        children: e(i, {
                          __fromCanvasComponent: !0,
                          children: e(r, {
                            children: e("a", {
                              href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xxxxxxxxxxxxxxxx&chain=mainnet",
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO0NvbWljIFNhbnMgTVMgQm9sZA==",
                                "--framer-font-family":
                                  '"Comic Sans MS Bold", "Comic Sans MS Bold Placeholder", sans-serif',
                                "--framer-font-size": "23.83px",
                                "--framer-letter-spacing": "-0.04em",
                                "--framer-line-height": "100%",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(255, 255, 255)",
                                "--framer-text-transform": "uppercase",
                              },
                              children: "BUY $tacoCAT",
                            }),
                          }),
                          className: "framer-14pw8m1",
                          "data-framer-name": "BUY $tacoCAT",
                          fonts: ["CUSTOM;Comic Sans MS Bold"],
                          name: "BUY $tacoCAT",
                          transformTemplate: l,
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              a("div", {
                className: "framer-1bnmktd",
                "data-framer-name": "Hero-Section",
                id: me,
                name: "Hero-Section",
                ref: ie,
                children: [
                  e("div", {
                    className: "framer-1flcfkg",
                    "data-framer-name": "shadow",
                    name: "shadow",
                  }),
                  a("div", {
                    className: "framer-1pc3482",
                    "data-framer-name": "Hero-assets_right",
                    name: "Hero-assets_right",
                    children: [
                      e(o, {
                        breakpoint: t,
                        overrides: {
                          tiAv0zJqn: {
                            background: {
                              alt: "",
                              fit: "stretch",
                              positionX: "center",
                              positionY: "center",
                              sizes: "129.5873px",
                              src: "/assets/img/I7wXTcB44MrwZsgjfvEmYJHu50.png",
                              srcSet:
                                "/assets/img/I7wXTcB44MrwZsgjfvEmYJHu50.png 512w, /assets/img/I7wXTcB44MrwZsgjfvEmYJHu50.png 1024w, /assets/img/I7wXTcB44MrwZsgjfvEmYJHu50.png 1048w",
                            },
                          },
                        },
                        children: e(n, {
                          background: {
                            alt: "",
                            fit: "stretch",
                            positionX: "center",
                            positionY: "center",
                            sizes: "222.2907px",
                            src: "/assets/img/I7wXTcB44MrwZsgjfvEmYJHu50.png",
                            srcSet:
                              "/assets/img/I7wXTcB44MrwZsgjfvEmYJHu50.png 512w, /assets/img/I7wXTcB44MrwZsgjfvEmYJHu50.png 1024w, /assets/img/I7wXTcB44MrwZsgjfvEmYJHu50.png 1048w",
                          },
                          className: "framer-1gfuw1t",
                          "data-framer-name": "Group 4 (4) 1",
                          name: "Group 4 (4) 1",
                          transformTemplate: Ce,
                        }),
                      }),
                      e(o, {
                        breakpoint: t,
                        overrides: {
                          tiAv0zJqn: {
                            background: {
                              alt: "",
                              fit: "stretch",
                              positionX: "center",
                              positionY: "center",
                              sizes: "85.895px",
                              src: "/assets/img/GXoIYXZ8Rnpx7WyUzhIkTiJ6Zg.png",
                              srcSet:
                                "/assets/img/GXoIYXZ8Rnpx7WyUzhIkTiJ6Zg.png 512w, /assets/img/GXoIYXZ8Rnpx7WyUzhIkTiJ6Zg.png 696w",
                            },
                          },
                        },
                        children: e(n, {
                          background: {
                            alt: "",
                            fit: "stretch",
                            positionX: "center",
                            positionY: "center",
                            sizes: "147.3421px",
                            src: "/assets/img/GXoIYXZ8Rnpx7WyUzhIkTiJ6Zg.png",
                            srcSet:
                              "/assets/img/GXoIYXZ8Rnpx7WyUzhIkTiJ6Zg.png 512w, /assets/img/GXoIYXZ8Rnpx7WyUzhIkTiJ6Zg.png 696w",
                          },
                          className: "framer-15t0xdz",
                          "data-framer-name": "Group 4 (4) 6",
                          name: "Group 4 (4) 6",
                          transformTemplate: Ge,
                        }),
                      }),
                      e(o, {
                        breakpoint: t,
                        overrides: {
                          tiAv0zJqn: {
                            background: {
                              alt: "",
                              fit: "fit",
                              positionX: "center",
                              positionY: "center",
                              sizes: "79px",
                              src: "/assets/img/sXhCkFCpE1J66SP0TcXTiFbrU.png",
                              srcSet:
                                "/assets/img/sXhCkFCpE1J66SP0TcXTiFbrU.png 512w, /assets/img/sXhCkFCpE1J66SP0TcXTiFbrU.png 637w",
                            },
                          },
                        },
                        children: e(n, {
                          background: {
                            alt: "",
                            fit: "fit",
                            positionX: "center",
                            positionY: "center",
                            sizes: "136.2702px",
                            src: "/assets/img/sXhCkFCpE1J66SP0TcXTiFbrU.png",
                            srcSet:
                              "/assets/img/sXhCkFCpE1J66SP0TcXTiFbrU.png 512w, /assets/img/sXhCkFCpE1J66SP0TcXTiFbrU.png 637w",
                          },
                          className: "framer-q6k7bu",
                          "data-framer-name": "Group 4 (4) 4",
                          name: "Group 4 (4) 4",
                        }),
                      }),
                    ],
                  }),
                  a("div", {
                    className: "framer-v6p2to",
                    "data-framer-name": "Hero-assets_left",
                    name: "Hero-assets_left",
                    children: [
                      e(o, {
                        breakpoint: t,
                        overrides: {
                          tiAv0zJqn: {
                            background: {
                              alt: "",
                              fit: "stretch",
                              positionX: "center",
                              positionY: "center",
                              sizes: "176.4357px",
                              src: "/assets/img/dWi4yATOXCP8W68Wb77Ehk5OxR4.png",
                              srcSet:
                                "/assets/img/dWi4yATOXCP8W68Wb77Ehk5OxR4.png 512w, /assets/img/dWi4yATOXCP8W68Wb77Ehk5OxR4.png 612w",
                            },
                            transformTemplate: Ne,
                          },
                        },
                        children: e(n, {
                          background: {
                            alt: "",
                            fit: "stretch",
                            positionX: "center",
                            positionY: "center",
                            sizes: "152.5585px",
                            src: "/assets/img/dWi4yATOXCP8W68Wb77Ehk5OxR4.png",
                            srcSet:
                              "/assets/img/dWi4yATOXCP8W68Wb77Ehk5OxR4.png 512w, /assets/img/dWi4yATOXCP8W68Wb77Ehk5OxR4.png 612w",
                          },
                          className: "framer-syh54p",
                          "data-framer-name": "Group 4 (4) 8",
                          name: "Group 4 (4) 8",
                          transformTemplate: Re,
                        }),
                      }),
                      e(o, {
                        breakpoint: t,
                        overrides: {
                          tiAv0zJqn: {
                            background: {
                              alt: "",
                              fit: "fit",
                              positionX: "center",
                              positionY: "center",
                              sizes: "112px",
                              src: "/assets/img/DbzPlrAn86rd4j0Y4DdaLmldw.png",
                              srcSet:
                                "/assets/img/DbzPlrAn86rd4j0Y4DdaLmldw.png 512w, /assets/img/DbzPlrAn86rd4j0Y4DdaLmldw.png 948w",
                            },
                          },
                        },
                        children: e(n, {
                          background: {
                            alt: "",
                            fit: "fit",
                            positionX: "center",
                            positionY: "center",
                            sizes: "238px",
                            src: "/assets/img/DbzPlrAn86rd4j0Y4DdaLmldw.png",
                            srcSet:
                              "/assets/img/DbzPlrAn86rd4j0Y4DdaLmldw.png 512w, /assets/img/DbzPlrAn86rd4j0Y4DdaLmldw.png 948w",
                          },
                          className: "framer-x2w8et",
                          "data-framer-name": "Group 4 (4) 4",
                          name: "Group 4 (4) 4",
                        }),
                      }),
                      e(o, {
                        breakpoint: t,
                        overrides: {
                          tiAv0zJqn: {
                            background: {
                              alt: "",
                              fit: "stretch",
                              positionX: "center",
                              positionY: "center",
                              sizes: "75.1632px",
                              src: "/assets/img/ljHvNq17fXAJHnQcSnyEb61Z3f8.png",
                              srcSet:
                                "/assets/img/ljHvNq17fXAJHnQcSnyEb61Z3f8.png 512w, /assets/img/ljHvNq17fXAJHnQcSnyEb61Z3f8.png 644w",
                            },
                          },
                        },
                        children: e(n, {
                          background: {
                            alt: "",
                            fit: "stretch",
                            positionX: "center",
                            positionY: "center",
                            sizes: "160.8918px",
                            src: "/assets/img/ljHvNq17fXAJHnQcSnyEb61Z3f8.png",
                            srcSet:
                              "/assets/img/ljHvNq17fXAJHnQcSnyEb61Z3f8.png 512w, /assets/img/ljHvNq17fXAJHnQcSnyEb61Z3f8.png 644w",
                          },
                          className: "framer-12ljdh9",
                          "data-framer-name": "Group 4 (4) 10",
                          name: "Group 4 (4) 10",
                          transformTemplate: Se,
                        }),
                      }),
                    ],
                  }),
                  a("div", {
                    className: "framer-1msret4",
                    "data-framer-name": "Marquee-scroll-1",
                    id: se,
                    name: "Marquee-scroll-1",
                    ref: fe,
                    children: [
                      a("div", {
                        className: "framer-1gunudb",
                        "data-framer-name": "Frame 1160444752",
                        name: "Frame 1160444752",
                        children: [
                          e("div", {
                            className: "framer-1bs22po",
                            "data-framer-name": "Frame 1160444751",
                            name: "Frame 1160444751",
                            children: a("div", {
                              className: "framer-1aeub9g",
                              "data-framer-name": "Group 427319143",
                              name: "Group 427319143",
                              children: [
                                e(o, {
                                  breakpoint: t,
                                  overrides: {
                                    Z044CjP48: {
                                      background: {
                                        alt: "",
                                        fit: "fit",
                                        loading: "lazy",
                                        positionX: "center",
                                        positionY: "center",
                                        src: "/assets/img/ycgObQCPh2uD8vhkoXqi0CYzHks.png",
                                      },
                                    },
                                  },
                                  children: e(n, {
                                    background: {
                                      alt: "",
                                      fit: "fit",
                                      positionX: "center",
                                      positionY: "center",
                                      src: "/assets/img/ycgObQCPh2uD8vhkoXqi0CYzHks.png",
                                    },
                                    className: "framer-sgxhx2",
                                    "data-framer-name": "5891",
                                    name: "5891",
                                  }),
                                }),
                                e(i, {
                                  __fromCanvasComponent: !0,
                                  children: e(r, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Um9ib3RvLXJlZ3VsYXI=",
                                        "--framer-font-family":
                                          '"Roboto", "Roboto Placeholder", sans-serif',
                                        "--framer-font-size": "43.95px",
                                      },
                                      children: "\u{1F525}",
                                    }),
                                  }),
                                  className: "framer-u0gky8",
                                  "data-framer-name": "\u{1F525}",
                                  fonts: ["GF;Roboto-regular"],
                                  name: "\u{1F525}",
                                  transformTemplate: d,
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          }),
                          e(o, {
                            breakpoint: t,
                            overrides: {
                              tiAv0zJqn: {
                                children: e(r, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                      "--framer-font-size": "32px",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                      "--framer-text-transform": "uppercase",
                                    },
                                    children: "tacocat backwards is tacocat",
                                  }),
                                }),
                              },
                            },
                            children: e(i, {
                              __fromCanvasComponent: !0,
                              children: e(r, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                    "--framer-font-family":
                                      '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                    "--framer-font-size": "48px",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                    "--framer-text-transform": "uppercase",
                                  },
                                  children: "tacocat backwards is tacocat",
                                }),
                              }),
                              className: "framer-zoqncp",
                              "data-framer-name": "Heading-5",
                              fonts: ["CUSTOM;Cucciolo Rough Regular"],
                              name: "Heading-5",
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                      a("div", {
                        className: "framer-1gihvgu",
                        "data-framer-name": "Frame 1160444754",
                        name: "Frame 1160444754",
                        children: [
                          e("div", {
                            className: "framer-1reuwsd",
                            "data-framer-name": "Frame 1160444751",
                            name: "Frame 1160444751",
                            children: a("div", {
                              className: "framer-z1fuy7",
                              "data-framer-name": "Group 427319143",
                              name: "Group 427319143",
                              children: [
                                e(o, {
                                  breakpoint: t,
                                  overrides: {
                                    Z044CjP48: {
                                      background: {
                                        alt: "",
                                        fit: "fit",
                                        loading: "lazy",
                                        positionX: "center",
                                        positionY: "center",
                                        src: "/assets/img/ycgObQCPh2uD8vhkoXqi0CYzHks.png",
                                      },
                                    },
                                  },
                                  children: e(n, {
                                    background: {
                                      alt: "",
                                      fit: "fit",
                                      positionX: "center",
                                      positionY: "center",
                                      src: "/assets/img/ycgObQCPh2uD8vhkoXqi0CYzHks.png",
                                    },
                                    className: "framer-vm06p0",
                                    "data-framer-name": "5891",
                                    name: "5891",
                                  }),
                                }),
                                e(i, {
                                  __fromCanvasComponent: !0,
                                  children: e(r, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Um9ib3RvLXJlZ3VsYXI=",
                                        "--framer-font-family":
                                          '"Roboto", "Roboto Placeholder", sans-serif',
                                        "--framer-font-size": "43.95px",
                                      },
                                      children: "\u{1F525}",
                                    }),
                                  }),
                                  className: "framer-xqw56i",
                                  "data-framer-name": "\u{1F525}",
                                  fonts: ["GF;Roboto-regular"],
                                  name: "\u{1F525}",
                                  transformTemplate: d,
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          }),
                          e(i, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                  "--framer-font-family":
                                    '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                  "--framer-font-size": "48px",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                  "--framer-text-transform": "uppercase",
                                },
                                children: "tacocat backwards is tacocat",
                              }),
                            }),
                            className: "framer-xd2y8u",
                            "data-framer-name": "Heading-5",
                            fonts: ["CUSTOM;Cucciolo Rough Regular"],
                            name: "Heading-5",
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      a("div", {
                        className: "framer-88sof7",
                        "data-framer-name": "Frame 1160444753",
                        name: "Frame 1160444753",
                        children: [
                          e("div", {
                            className: "framer-1ldcor2",
                            "data-framer-name": "Frame 1160444751",
                            name: "Frame 1160444751",
                            children: a("div", {
                              className: "framer-gl07ry",
                              "data-framer-name": "Group 427319143",
                              name: "Group 427319143",
                              children: [
                                e(o, {
                                  breakpoint: t,
                                  overrides: {
                                    Z044CjP48: {
                                      background: {
                                        alt: "",
                                        fit: "fit",
                                        loading: "lazy",
                                        positionX: "center",
                                        positionY: "center",
                                        src: "/assets/img/ycgObQCPh2uD8vhkoXqi0CYzHks.png",
                                      },
                                    },
                                  },
                                  children: e(n, {
                                    background: {
                                      alt: "",
                                      fit: "fit",
                                      positionX: "center",
                                      positionY: "center",
                                      src: "/assets/img/ycgObQCPh2uD8vhkoXqi0CYzHks.png",
                                    },
                                    className: "framer-452286",
                                    "data-framer-name": "5891",
                                    name: "5891",
                                  }),
                                }),
                                e(i, {
                                  __fromCanvasComponent: !0,
                                  children: e(r, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Um9ib3RvLXJlZ3VsYXI=",
                                        "--framer-font-family":
                                          '"Roboto", "Roboto Placeholder", sans-serif',
                                        "--framer-font-size": "43.95px",
                                      },
                                      children: "\u{1F525}",
                                    }),
                                  }),
                                  className: "framer-fatocu",
                                  "data-framer-name": "\u{1F525}",
                                  fonts: ["GF;Roboto-regular"],
                                  name: "\u{1F525}",
                                  transformTemplate: d,
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          }),
                          e(i, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                  "--framer-font-family":
                                    '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                  "--framer-font-size": "48px",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                  "--framer-text-transform": "uppercase",
                                },
                                children: "tacocat backwards is tacocat",
                              }),
                            }),
                            className: "framer-nxmzz4",
                            "data-framer-name": "Heading-5",
                            fonts: ["CUSTOM;Cucciolo Rough Regular"],
                            name: "Heading-5",
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                  a("div", {
                    className: "framer-wlz62q",
                    "data-framer-name": "Background-1",
                    name: "Background-1",
                    children: [
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fit",
                          positionX: "center",
                          positionY: "center",
                          sizes: "1028px",
                          src: "/assets/img/sXug5Hb0azbrca3EYAkPz0nziJM.png",
                          srcSet:
                            "/assets/img/sXug5Hb0azbrca3EYAkPz0nziJM.png 512w, /assets/img/sXug5Hb0azbrca3EYAkPz0nziJM.png 1024w, /assets/img/sXug5Hb0azbrca3EYAkPz0nziJM.png 2048w, /assets/img/sXug5Hb0azbrca3EYAkPz0nziJM.png 4096w, /assets/img/sXug5Hb0azbrca3EYAkPz0nziJM.png 4109w",
                        },
                        className: "framer-19c5ujj",
                        "data-framer-name": "image 183",
                        name: "image 183",
                      }),
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fill",
                          sizes: "764.1254px",
                          src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                          srcSet:
                            "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                        },
                        className: "framer-sqfsne",
                        "data-framer-name": "image 186",
                        name: "image 186",
                        transformTemplate: w,
                      }),
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fill",
                          sizes: "326.8293px",
                          src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                          srcSet:
                            "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                        },
                        className: "framer-1w5vy1",
                        "data-framer-name": "image 187",
                        name: "image 187",
                        transformTemplate: b,
                      }),
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fill",
                          sizes: "326.8293px",
                          src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                          srcSet:
                            "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                        },
                        className: "framer-f3194j",
                        "data-framer-name": "image 188",
                        name: "image 188",
                        transformTemplate: k,
                      }),
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fill",
                          sizes: "631.738px",
                          src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                          srcSet:
                            "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                        },
                        className: "framer-13w7dx1",
                        "data-framer-name": "image 189",
                        name: "image 189",
                        transformTemplate: v,
                      }),
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fill",
                          sizes: "486.9221px",
                          src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                          srcSet:
                            "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                        },
                        className: "framer-go2n8w",
                        "data-framer-name": "image 190",
                        name: "image 190",
                        transformTemplate: C,
                      }),
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fit",
                          positionX: "center",
                          positionY: "center",
                          sizes: "835px",
                          src: "/assets/img/4dlxWXzYXL7EcWyKY5SZK3f4Pkw.png",
                          srcSet:
                            "/assets/img/4dlxWXzYXL7EcWyKY5SZK3f4Pkw.png 512w, /assets/img/4dlxWXzYXL7EcWyKY5SZK3f4Pkw.png 1024w, /assets/img/4dlxWXzYXL7EcWyKY5SZK3f4Pkw.png 2048w, /assets/img/4dlxWXzYXL7EcWyKY5SZK3f4Pkw.png 3334w",
                        },
                        className: "framer-q1fquu",
                        "data-framer-name": "image 265",
                        name: "image 265",
                      }),
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fill",
                          sizes: "364.1378px",
                          src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                          srcSet:
                            "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                        },
                        className: "framer-ahemwu",
                        "data-framer-name": "image 185",
                        name: "image 185",
                        transformTemplate: G,
                      }),
                    ],
                  }),
                  e(o, {
                    breakpoint: t,
                    overrides: {
                      tiAv0zJqn: {
                        background: {
                          alt: "",
                          fit: "fit",
                          positionX: "center",
                          positionY: "center",
                          sizes: "263px",
                          src: "/assets/img/PyOHHxEFqgvjrXBTXIAO6XGYe90.png",
                          srcSet:
                            "/assets/img/PyOHHxEFqgvjrXBTXIAO6XGYe90.png 512w, /assets/img/PyOHHxEFqgvjrXBTXIAO6XGYe90.png 1024w, /assets/img/PyOHHxEFqgvjrXBTXIAO6XGYe90.png 1813w",
                        },
                        transformTemplate: ze,
                      },
                    },
                    children: e(n, {
                      background: {
                        alt: "",
                        fit: "fit",
                        positionX: "center",
                        positionY: "center",
                        sizes: "405px",
                        src: "/assets/img/PyOHHxEFqgvjrXBTXIAO6XGYe90.png",
                        srcSet:
                          "/assets/img/PyOHHxEFqgvjrXBTXIAO6XGYe90.png 512w, /assets/img/PyOHHxEFqgvjrXBTXIAO6XGYe90.png 1024w, /assets/img/PyOHHxEFqgvjrXBTXIAO6XGYe90.png 1813w",
                      },
                      className: "framer-1g7gw5j",
                      "data-framer-name": "Hero-image_left",
                      name: "Hero-image_left",
                    }),
                  }),
                  a("div", {
                    className: "framer-kjzddj",
                    "data-framer-name": "Hero-image_right",
                    name: "Hero-image_right",
                    children: [
                      e(o, {
                        breakpoint: t,
                        overrides: {
                          tiAv0zJqn: {
                            background: {
                              alt: "",
                              fit: "fill",
                              sizes: "192px",
                              src: "/assets/img/c2HZ8zkao5OgBZOH3PTasfg8U.png",
                              srcSet:
                                "/assets/img/c2HZ8zkao5OgBZOH3PTasfg8U.png 658w, /assets/img/c2HZ8zkao5OgBZOH3PTasfg8U.png 1316w, /assets/img/c2HZ8zkao5OgBZOH3PTasfg8U.png 1803w",
                            },
                          },
                          Z044CjP48: {
                            background: {
                              alt: "",
                              fit: "fill",
                              sizes: "341px",
                              src: "/assets/img/c2HZ8zkao5OgBZOH3PTasfg8U.png",
                              srcSet:
                                "/assets/img/c2HZ8zkao5OgBZOH3PTasfg8U.png 658w, /assets/img/c2HZ8zkao5OgBZOH3PTasfg8U.png 1316w, /assets/img/c2HZ8zkao5OgBZOH3PTasfg8U.png 1803w",
                            },
                            transformTemplate: Fe,
                          },
                        },
                        children: e(n, {
                          background: {
                            alt: "",
                            fit: "fill",
                            sizes: "384.3412px",
                            src: "/assets/img/c2HZ8zkao5OgBZOH3PTasfg8U.png",
                            srcSet:
                              "/assets/img/c2HZ8zkao5OgBZOH3PTasfg8U.png 658w, /assets/img/c2HZ8zkao5OgBZOH3PTasfg8U.png 1316w, /assets/img/c2HZ8zkao5OgBZOH3PTasfg8U.png 1803w",
                          },
                          className: "framer-1mgud0",
                          "data-framer-name": "image 268",
                          name: "image 268",
                          transformTemplate: Ve,
                        }),
                      }),
                      e(o, {
                        breakpoint: t,
                        overrides: {
                          tiAv0zJqn: {
                            background: {
                              alt: "",
                              fit: "fill",
                              sizes: "151.1607px",
                              src: "/assets/img/xtXd5e9XgZXZDAeYHpkZ1Idgew.png",
                              srcSet:
                                "/assets/img/xtXd5e9XgZXZDAeYHpkZ1Idgew.png 512w, /assets/img/xtXd5e9XgZXZDAeYHpkZ1Idgew.png 1024w, /assets/img/xtXd5e9XgZXZDAeYHpkZ1Idgew.png 2000w",
                            },
                          },
                          Z044CjP48: {
                            background: {
                              alt: "",
                              fit: "fill",
                              sizes: "271px",
                              src: "/assets/img/xtXd5e9XgZXZDAeYHpkZ1Idgew.png",
                              srcSet:
                                "/assets/img/xtXd5e9XgZXZDAeYHpkZ1Idgew.png 512w, /assets/img/xtXd5e9XgZXZDAeYHpkZ1Idgew.png 1024w, /assets/img/xtXd5e9XgZXZDAeYHpkZ1Idgew.png 2000w",
                            },
                          },
                        },
                        children: e(n, {
                          background: {
                            alt: "",
                            fit: "fill",
                            sizes: "331.7139px",
                            src: "/assets/img/xtXd5e9XgZXZDAeYHpkZ1Idgew.png",
                            srcSet:
                              "/assets/img/xtXd5e9XgZXZDAeYHpkZ1Idgew.png 512w, /assets/img/xtXd5e9XgZXZDAeYHpkZ1Idgew.png 1024w, /assets/img/xtXd5e9XgZXZDAeYHpkZ1Idgew.png 2000w",
                          },
                          className: "framer-hynorz",
                          "data-framer-name": "5890",
                          name: "5890",
                          transformTemplate: Ze,
                        }),
                      }),
                    ],
                  }),
                  a("div", {
                    className: "framer-72uwxk",
                    "data-framer-name": "Hero-text",
                    name: "Hero-text",
                    children: [
                      a("div", {
                        className: "framer-15ma99s",
                        "data-framer-name": "Hero-Heading",
                        name: "Hero-Heading",
                        children: [
                          a("div", {
                            className: "framer-1ois7t0",
                            children: [
                              e(o, {
                                breakpoint: t,
                                overrides: {
                                  tiAv0zJqn: {
                                    children: e(r, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "Q1VTVE9NO0NvbWljIFNhbnMgTVMgQm9sZA==",
                                          "--framer-font-family":
                                            '"Comic Sans MS Bold", "Comic Sans MS Bold Placeholder", sans-serif',
                                          "--framer-font-size": "20px",
                                          "--framer-letter-spacing": "0.02em",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                          "--framer-text-transform":
                                            "capitalize",
                                        },
                                        children: "The ticker is",
                                      }),
                                    }),
                                  },
                                },
                                children: e(i, {
                                  __fromCanvasComponent: !0,
                                  children: e(r, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO0NvbWljIFNhbnMgTVMgQm9sZA==",
                                        "--framer-font-family":
                                          '"Comic Sans MS Bold", "Comic Sans MS Bold Placeholder", sans-serif',
                                        "--framer-font-size": "32px",
                                        "--framer-letter-spacing": "0.02em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                        "--framer-text-transform": "capitalize",
                                      },
                                      children: "The ticker is",
                                    }),
                                  }),
                                  className: "framer-2wo48s",
                                  "data-framer-name": "Hero-subheading",
                                  fonts: ["CUSTOM;Comic Sans MS Bold"],
                                  name: "Hero-subheading",
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                              e(o, {
                                breakpoint: t,
                                overrides: {
                                  tiAv0zJqn: {
                                    children: e(r, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "Q1VTVE9NO0NvbWljIFNhbnMgTVMgQm9sZA==",
                                          "--framer-font-family":
                                            '"Comic Sans MS Bold", "Comic Sans MS Bold Placeholder", sans-serif',
                                          "--framer-font-size": "20px",
                                          "--framer-letter-spacing": "0.02em",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-transform":
                                            "capitalize",
                                        },
                                        children: e("span", {
                                          "data-text-fill": "true",
                                          style: {
                                            backgroundImage:
                                              "linear-gradient(0deg, rgb(250, 130, 2) 0%, rgb(255, 205, 40) 100%)",
                                          },
                                          children: "Backwards",
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                children: e(i, {
                                  __fromCanvasComponent: !0,
                                  children: e(r, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO0NvbWljIFNhbnMgTVMgQm9sZA==",
                                        "--framer-font-family":
                                          '"Comic Sans MS Bold", "Comic Sans MS Bold Placeholder", sans-serif',
                                        "--framer-font-size": "32px",
                                        "--framer-letter-spacing": "0.02em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-transform": "capitalize",
                                      },
                                      children: e("span", {
                                        "data-text-fill": "true",
                                        style: {
                                          backgroundImage:
                                            "linear-gradient(0deg, rgb(250, 130, 2) 0%, rgb(255, 205, 40) 100%)",
                                        },
                                        children: "Backwards",
                                      }),
                                    }),
                                  }),
                                  className: "framer-rggg3t",
                                  "data-framer-name": "Hero-subheading",
                                  fonts: ["CUSTOM;Comic Sans MS Bold"],
                                  name: "Hero-subheading",
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              })
                            ],
                          }),
                          e("div", {
                            style: {
                                color: "white"
                            },
                            children:"CA: 0x000000000000000000"
                          }),
                          e("div", {
                            className: "framer-14ww23f",
                            "data-framer-name": "Hero-heading",
                            name: "Hero-heading",
                            children: a("div", {
                              className: "framer-jfuo16",
                              "data-framer-name": "Frame 1160444759",
                              name: "Frame 1160444759",
                              children: [
                                a("div", {
                                  className: "framer-a5qsh4",
                                  "data-framer-name": "Frame 1160444757",
                                  name: "Frame 1160444757",
                                  children: [
                                    e(o, {
                                      breakpoint: t,
                                      overrides: {
                                        tiAv0zJqn: {
                                          children: e(r, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                                "--framer-font-family":
                                                  '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                                "--framer-font-size": "80px",
                                                "--framer-text-alignment":
                                                  "center",
                                                "--framer-text-color":
                                                  "rgb(0, 64, 186)",
                                                "--framer-text-transform":
                                                  "uppercase",
                                              },
                                              children: "TICKER IS",
                                            }),
                                          }),
                                        },
                                        Z044CjP48: {
                                          children: e(r, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                                "--framer-font-family":
                                                  '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                                "--framer-font-size": "172px",
                                                "--framer-text-alignment":
                                                  "center",
                                                "--framer-text-color":
                                                  "rgb(0, 64, 186)",
                                                "--framer-text-transform":
                                                  "uppercase",
                                              },
                                              children: "TICKER IS",
                                            }),
                                          }),
                                        },
                                      },
                                      children: e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                              "--framer-font-family":
                                                '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                              "--framer-font-size": "200px",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(0, 64, 186)",
                                              "--framer-text-transform":
                                                "uppercase",
                                            },
                                            children: "TICKER IS",
                                          }),
                                        }),
                                        className: "framer-p6qr63",
                                        "data-framer-name": "Heading-2",
                                        fonts: [
                                          "CUSTOM;Cucciolo Rough Regular",
                                        ],
                                        name: "Heading-2",
                                        transformTemplate: l,
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    e(o, {
                                      breakpoint: t,
                                      overrides: {
                                        tiAv0zJqn: {
                                          children: e(r, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                                "--framer-font-family":
                                                  '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                                "--framer-font-size": "80px",
                                                "--framer-text-alignment":
                                                  "center",
                                                "--framer-text-transform":
                                                  "uppercase",
                                              },
                                              children: e("span", {
                                                "data-text-fill": "true",
                                                style: {
                                                  backgroundImage:
                                                    "linear-gradient(rgb(77, 193, 255) 0%, rgb(0, 147, 255) 100%)",
                                                },
                                                children: "TICKER IS",
                                              }),
                                            }),
                                          }),
                                        },
                                        Z044CjP48: {
                                          children: e(r, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                                "--framer-font-family":
                                                  '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                                "--framer-font-size": "172px",
                                                "--framer-text-alignment":
                                                  "center",
                                                "--framer-text-transform":
                                                  "uppercase",
                                              },
                                              children: e("span", {
                                                "data-text-fill": "true",
                                                style: {
                                                  backgroundImage:
                                                    "linear-gradient(rgb(77, 193, 255) 0%, rgb(0, 147, 255) 100%)",
                                                },
                                                children: "TICKER IS",
                                              }),
                                            }),
                                          }),
                                        },
                                      },
                                      children: e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                              "--framer-font-family":
                                                '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                              "--framer-font-size": "200px",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-transform":
                                                "uppercase",
                                            },
                                            children: e("span", {
                                              "data-text-fill": "true",
                                              style: {
                                                backgroundImage:
                                                  "linear-gradient(rgb(77, 193, 255) 0%, rgb(0, 147, 255) 100%)",
                                              },
                                              children: "TICKER IS",
                                            }),
                                          }),
                                        }),
                                        className: "framer-1e65ng4",
                                        "data-framer-name": "Heading-2",
                                        fonts: [
                                          "CUSTOM;Cucciolo Rough Regular",
                                        ],
                                        name: "Heading-2",
                                        transformTemplate: l,
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                                a("div", {
                                  className: "framer-aq01w9",
                                  "data-framer-name": "Frame 1160444758",
                                  name: "Frame 1160444758",
                                  children: [
                                    e(o, {
                                      breakpoint: t,
                                      overrides: {
                                        tiAv0zJqn: {
                                          children: e(r, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                                "--framer-font-family":
                                                  '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                                "--framer-font-size": "80px",
                                                "--framer-text-alignment":
                                                  "center",
                                                "--framer-text-color":
                                                  "rgb(199, 83, 0)",
                                                "--framer-text-transform":
                                                  "uppercase",
                                              },
                                              children: "$Tacocat",
                                            }),
                                          }),
                                        },
                                        Z044CjP48: {
                                          children: e(r, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                                "--framer-font-family":
                                                  '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                                "--framer-font-size": "172px",
                                                "--framer-text-alignment":
                                                  "center",
                                                "--framer-text-color":
                                                  "rgb(199, 83, 0)",
                                                "--framer-text-transform":
                                                  "uppercase",
                                              },
                                              children: "$Tacocat",
                                            }),
                                          }),
                                        },
                                      },
                                      children: e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                              "--framer-font-family":
                                                '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                              "--framer-font-size": "200px",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(199, 83, 0)",
                                              "--framer-text-transform":
                                                "uppercase",
                                            },
                                            children: "$Tacocat",
                                          }),
                                        }),
                                        className: "framer-cz5wip",
                                        "data-framer-name": "Heading-1",
                                        fonts: [
                                          "CUSTOM;Cucciolo Rough Regular",
                                        ],
                                        name: "Heading-1",
                                        transformTemplate: l,
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    e(o, {
                                      breakpoint: t,
                                      overrides: {
                                        tiAv0zJqn: {
                                          children: e(r, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                                "--framer-font-family":
                                                  '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                                "--framer-font-size": "80px",
                                                "--framer-text-alignment":
                                                  "center",
                                                "--framer-text-transform":
                                                  "uppercase",
                                              },
                                              children: e("span", {
                                                "data-text-fill": "true",
                                                style: {
                                                  backgroundImage:
                                                    "linear-gradient(rgb(255, 205, 40) 0%, rgb(250, 132, 3) 100%)",
                                                },
                                                children: "$Tacocat",
                                              }),
                                            }),
                                          }),
                                        },
                                        Z044CjP48: {
                                          children: e(r, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                                "--framer-font-family":
                                                  '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                                "--framer-font-size": "172px",
                                                "--framer-text-alignment":
                                                  "center",
                                                "--framer-text-transform":
                                                  "uppercase",
                                              },
                                              children: e("span", {
                                                "data-text-fill": "true",
                                                style: {
                                                  backgroundImage:
                                                    "linear-gradient(rgb(255, 205, 40) 0%, rgb(250, 132, 3) 100%)",
                                                },
                                                children: "$Tacocat",
                                              }),
                                            }),
                                          }),
                                        },
                                      },
                                      children: e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                              "--framer-font-family":
                                                '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                              "--framer-font-size": "200px",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-transform":
                                                "uppercase",
                                            },
                                            children: e("span", {
                                              "data-text-fill": "true",
                                              style: {
                                                backgroundImage:
                                                  "linear-gradient(rgb(255, 205, 40) 0%, rgb(250, 132, 3) 100%)",
                                              },
                                              children: "$Tacocat",
                                            }),
                                          }),
                                        }),
                                        className: "framer-1gxgyus",
                                        "data-framer-name": "Heading-1",
                                        fonts: [
                                          "CUSTOM;Cucciolo Rough Regular",
                                        ],
                                        name: "Heading-1",
                                        transformTemplate: l,
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      
                      a("div", {
                        className: "framer-s9sz6t",
                        style: {transform: "translate(0,50px)"},
                        children: [
                          e("div", {
                            className: "framer-1prlff0",
                            children: e(f, {
                              href: "https://x.com/tacocat_ethx",
                              openInNewTab: !0,
                              children: e(p, {
                                as: "a",
                                className: "framer-12x5v4u framer-lux5qc",
                                "data-framer-name": "icon-twitter",
                                layout: "position",
                                name: "icon-twitter",
                                opacity: 1,
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 53 53"><g><defs><linearGradient id="idss2009534023_1g1450211482" x1="0.49751243781094523" x2="0.5024875621890548" y1="0" y2="1"><stop offset="0" stop-color="rgb(255,205,40)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(250,132,3)" stop-opacity="1"></stop></linearGradient></defs><path d="M 30.031 23.376 L 44.158 7.648 L 40.81 7.648 L 28.544 21.304 L 18.747 7.648 L 7.447 7.648 L 22.262 28.299 L 7.447 44.791 L 10.795 44.791 L 23.748 30.37 L 34.094 44.791 L 45.395 44.791 Z M 25.446 28.48 L 23.944 26.424 L 12.001 10.062 L 17.143 10.062 L 26.781 23.267 L 28.282 25.323 L 40.811 42.487 L 35.67 42.487 Z" fill="url(#idss2009534023_1g1450211482)"></path></g></svg>',
                                svgContentId: 2009534023,
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                          e("div", {
                            className: "framer-1s5swm7",
                            children: e(f, {
                              href: "https://t.me/tacocat_portal",
                              children: e(p, {
                                as: "a",
                                className: "framer-15dwae0 framer-lux5qc",
                                "data-framer-name": "icon-telegram",
                                layout: "position",
                                name: "icon-telegram",
                                opacity: 1,
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 53 53"><g transform="translate(0.42 0.22)" id="ss4054711509_1"><path d="M 0 52 L 0 0 L 52 0 L 52 52 Z" fill="transparent"></path><g><defs><linearGradient id="idss4054711509_3g1450211482" x1="0.49751243781094523" x2="0.5024875621890548" y1="0" y2="1"><stop offset="0" stop-color="rgb(255,205,40)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(250,132,3)" stop-opacity="1"></stop></linearGradient></defs><path d="M 42.853 9.599 C 43.388 9.373 43.974 9.296 44.55 9.374 C 45.126 9.452 45.67 9.683 46.126 10.042 C 46.582 10.402 46.934 10.877 47.144 11.419 C 47.354 11.961 47.415 12.549 47.321 13.122 L 42.407 42.929 C 41.93 45.804 38.775 47.453 36.138 46.02 C 33.933 44.822 30.657 42.976 27.71 41.05 C 26.237 40.086 21.724 36.998 22.278 34.801 C 22.755 32.923 30.338 25.864 34.672 21.667 C 36.372 20.018 35.597 19.067 33.588 20.584 C 28.601 24.349 20.593 30.076 17.945 31.688 C 15.609 33.109 14.392 33.352 12.936 33.109 C 10.279 32.667 7.816 31.983 5.805 31.148 C 3.088 30.022 3.22 26.286 5.803 25.199 Z" fill="url(#idss4054711509_3g1450211482)"></path></g></g></svg>',
                                svgContentId: 4054711509,
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              a("div", {
                className: "framer-1ch9a5m",
                "data-framer-name": "Section-2",
                id: le,
                name: "Section-2",
                ref: ce,
                children: [
                  e(o, {
                    breakpoint: t,
                    overrides: {
                      tiAv0zJqn: {
                        background: {
                          alt: "",
                          fit: "fit",
                          intrinsicHeight: 998,
                          intrinsicWidth: 996,
                          positionX: "center",
                          positionY: "center",
                          src: "/assets/img/aZaKGllkIiZi6TtBaGqVKG1UQw.svg",
                        },
                      },
                    },
                    children: e(n, {
                      background: {
                        alt: "",
                        fit: "fit",
                        intrinsicHeight: 998,
                        intrinsicWidth: 996,
                        loading: "lazy",
                        positionX: "center",
                        positionY: "center",
                        src: "/assets/img/aZaKGllkIiZi6TtBaGqVKG1UQw.svg",
                      },
                      className: "framer-1d4lecu",
                      "data-framer-name": "Vector",
                      name: "Vector",
                    }),
                  }),
                  a("div", {
                    className: "framer-3m434p",
                    "data-framer-name": "Heading -Section_2",
                    name: "Heading -Section_2",
                    children: [
                      e("div", {
                        className: "framer-12e2j5t",
                        "data-framer-name": "Heading",
                        name: "Heading",
                        children: a("div", {
                          className: "framer-a0jkp2",
                          "data-framer-name": "Frame 1160444762",
                          name: "Frame 1160444762",
                          children: [
                            a("div", {
                              className: "framer-64vkyv",
                              "data-framer-name": "Frame 1160444761",
                              name: "Frame 1160444761",
                              children: [
                                e(o, {
                                  breakpoint: t,
                                  overrides: {
                                    tiAv0zJqn: {
                                      children: e(r, {
                                        children: a("p", {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                            "--framer-font-size": "72px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(199, 83, 0)",
                                            "--framer-text-transform":
                                              "uppercase",
                                          },
                                          children: [
                                            "This is ",
                                            e("br", {}),
                                            "$Tacocat ",
                                          ],
                                        }),
                                      }),
                                      transformTemplate: void 0,
                                    },
                                    Z044CjP48: {
                                      children: e(r, {
                                        children: a("p", {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                            "--framer-font-size": "134px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(199, 83, 0)",
                                            "--framer-text-transform":
                                              "uppercase",
                                          },
                                          children: [
                                            "This is",
                                            e("br", {}),
                                            "$Tacocat ",
                                          ],
                                        }),
                                      }),
                                      transformTemplate: Q,
                                    },
                                  },
                                  children: e(i, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                          "--framer-font-size": "134px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgb(199, 83, 0)",
                                          "--framer-text-transform":
                                            "uppercase",
                                        },
                                        children: "This is $Tacocat ",
                                      }),
                                    }),
                                    className: "framer-1ktwl9",
                                    "data-framer-name": "Heading-3/yellow",
                                    fonts: ["CUSTOM;Cucciolo Rough Regular"],
                                    name: "Heading-3/yellow",
                                    transformTemplate: l,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                e(o, {
                                  breakpoint: t,
                                  overrides: {
                                    tiAv0zJqn: {
                                      children: e(r, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                            "--framer-font-size": "72px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-transform":
                                              "uppercase",
                                          },
                                          children: a("span", {
                                            "data-text-fill": "true",
                                            style: {
                                              backgroundImage:
                                                "linear-gradient(rgb(255, 205, 40) 0%, rgb(250, 132, 3) 100%)",
                                            },
                                            children: [
                                              "This is ",
                                              e("br", {}),
                                              "$Tacocat ",
                                            ],
                                          }),
                                        }),
                                      }),
                                    },
                                    Z044CjP48: {
                                      children: e(r, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                            "--framer-font-size": "132px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-transform":
                                              "uppercase",
                                          },
                                          children: a("span", {
                                            "data-text-fill": "true",
                                            style: {
                                              backgroundImage:
                                                "linear-gradient(rgb(255, 205, 40) 0%, rgb(250, 132, 3) 100%)",
                                            },
                                            children: [
                                              "This is ",
                                              e("br", {}),
                                              "$Tacocat ",
                                            ],
                                          }),
                                        }),
                                      }),
                                      transformTemplate: l,
                                    },
                                  },
                                  children: e(i, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                          "--framer-font-size": "132px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-transform":
                                            "uppercase",
                                        },
                                        children: e("span", {
                                          "data-text-fill": "true",
                                          style: {
                                            backgroundImage:
                                              "linear-gradient(rgb(255, 205, 40) 0%, rgb(250, 132, 3) 100%)",
                                          },
                                          children: "This is $Tacocat ",
                                        }),
                                      }),
                                    }),
                                    className: "framer-yb9pem",
                                    "data-framer-name": "Heading-3/yellow",
                                    fonts: ["CUSTOM;Cucciolo Rough Regular"],
                                    name: "Heading-3/yellow",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            a("div", {
                              className: "framer-1cxnm0",
                              "data-framer-name": "Frame 1160444760",
                              name: "Frame 1160444760",
                              children: [
                                e(o, {
                                  breakpoint: t,
                                  overrides: {
                                    tiAv0zJqn: {
                                      children: e(r, {
                                        children: a("p", {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                            "--framer-font-size": "62px",
                                            "--framer-letter-spacing":
                                              "-0.01em",
                                            "--framer-line-height": "1.1em",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-transform":
                                              "uppercase",
                                          },
                                          children: [
                                            "ILLegally iMMIGRAtED",
                                            e("br", {}),
                                            " FROM mexiCO  ",
                                          ],
                                        }),
                                      }),
                                    },
                                    Z044CjP48: {
                                      children: e(r, {
                                        children: a("p", {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                            "--framer-font-size": "72px",
                                            "--framer-letter-spacing":
                                              "-0.01em",
                                            "--framer-line-height": "1.1em",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-transform":
                                              "uppercase",
                                          },
                                          children: [
                                            "ILLegally iMMIGRAtED ",
                                            e("br", {}),
                                            "FROM mexiCO  ",
                                          ],
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(i, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                          "--framer-font-size": "92px",
                                          "--framer-letter-spacing": "-0.01em",
                                          "--framer-line-height": "1.1em",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-transform":
                                            "uppercase",
                                        },
                                        children:
                                          "ILLegally iMMIGRAtED FROM mexiCO  ",
                                      }),
                                    }),
                                    className: "framer-o1qqnv",
                                    "data-framer-name": "Heading-4",
                                    fonts: ["CUSTOM;Cucciolo Rough Regular"],
                                    name: "Heading-4",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                e(o, {
                                  breakpoint: t,
                                  overrides: {
                                    tiAv0zJqn: {
                                      children: e(r, {
                                        children: a("p", {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                            "--framer-font-size": "56px",
                                            "--framer-line-height": "1.1em",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                            "--framer-text-transform":
                                              "uppercase",
                                          },
                                          children: [
                                            e("span", {
                                              style: {
                                                "--framer-font-size": "62px",
                                              },
                                              children: "ILLegally iMMIGRAtED",
                                            }),
                                            e("span", {
                                              style: {
                                                "--framer-font-size": "62px",
                                              },
                                              children: e("br", {}),
                                            }),
                                            e("span", {
                                              style: {
                                                "--framer-font-size": "62px",
                                              },
                                              children: " FROM mexiCO",
                                            }),
                                            e("span", {
                                              style: {
                                                "--framer-font-size": "62px",
                                                "--framer-text-color":
                                                  "rgb(0, 0, 0)",
                                              },
                                              children: "  ",
                                            }),
                                          ],
                                        }),
                                      }),
                                    },
                                    Z044CjP48: {
                                      children: e(r, {
                                        children: a("p", {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                            "--framer-font-size": "72px",
                                            "--framer-line-height": "1.1em",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                            "--framer-text-transform":
                                              "uppercase",
                                          },
                                          children: [
                                            "ILLegally iMMIGRAtED ",
                                            e("br", {}),
                                            "FROM mexiCO",
                                            e("span", {
                                              style: {
                                                "--framer-text-color":
                                                  "rgb(0, 0, 0)",
                                              },
                                              children: "  ",
                                            }),
                                          ],
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(i, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                      children: a("p", {
                                        style: {
                                          "--font-selector":
                                            "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                          "--framer-font-size": "92px",
                                          "--framer-line-height": "1.1em",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                          "--framer-text-transform":
                                            "uppercase",
                                        },
                                        children: [
                                          "ILLegally iMMIGRAtED FROM mexiCO",
                                          e("span", {
                                            style: {
                                              "--framer-text-color":
                                                "rgb(0, 0, 0)",
                                            },
                                            children: "  ",
                                          }),
                                        ],
                                      }),
                                    }),
                                    className: "framer-57bexm",
                                    "data-framer-name": "Heading-4",
                                    fonts: ["CUSTOM;Cucciolo Rough Regular"],
                                    name: "Heading-4",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      e(i, {
                        __fromCanvasComponent: !0,
                        children: e(r, {
                          children: e("p", {
                            style: {
                              "--font-selector":
                                "Q1VTVE9NO0NvbWljIFNhbnMgTVMgQm9sZA==",
                              "--framer-font-family":
                                '"Comic Sans MS Bold", "Comic Sans MS Bold Placeholder", sans-serif',
                              "--framer-font-size": "20px",
                              "--framer-line-height": "1.5em",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "rgb(255, 255, 255)",
                              "--framer-text-transform": "capitalize",
                            },
                            children:
                              "With the Border in shambles, Biden Administration allowing Migrants to overtake Schools, shelters, airports and more while displacing Americans in the process; Tacocat is here to get in while he can and then take down the regime from the inside. He's on an undercover mission.... operation slip into the US while Biden is asleep at his desk; then make the ultimate infiltration as a Biden supporter and open border activist - only to tear the administration from the inside out while he works with Trump to restore order and build the greatest walls the World has ever seen.",
                          }),
                        }),
                        className: "framer-1fkqiqr",
                        "data-framer-name":
                          "He is on a mission to dominate the world. Dodging Border Petrol on a journey to become an upstanding citizen. Backwards, forwards - It\u2019s always tacocat.",
                        fonts: ["CUSTOM;Comic Sans MS Bold"],
                        name: "He is on a mission to dominate the world. Dodging Border Petrol on a journey to become an upstanding citizen. Backwards, forwards - It\u2019s always tacocat.",
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                  a("div", {
                    className: "framer-1s38txq",
                    "data-framer-name": "Background-1",
                    name: "Background-1",
                    children: [
                      e(o, {
                        breakpoint: t,
                        overrides: {
                          tiAv0zJqn: {
                            background: {
                              alt: "",
                              fit: "fit",
                              positionX: "center",
                              positionY: "center",
                              sizes: "1028px",
                              src: "/assets/img/J13CsOE0hDfZNa8PZ4sYCwFUxcg.png",
                              srcSet:
                                "/assets/img/J13CsOE0hDfZNa8PZ4sYCwFUxcg.png 512w, /assets/img/J13CsOE0hDfZNa8PZ4sYCwFUxcg.png 1024w, /assets/img/J13CsOE0hDfZNa8PZ4sYCwFUxcg.png 2048w, /assets/img/J13CsOE0hDfZNa8PZ4sYCwFUxcg.png 4096w, /assets/img/J13CsOE0hDfZNa8PZ4sYCwFUxcg.png 4109w",
                            },
                          },
                        },
                        children: e(n, {
                          background: {
                            alt: "",
                            fit: "fit",
                            loading: "lazy",
                            positionX: "center",
                            positionY: "center",
                            sizes: "1028px",
                            src: "/assets/img/J13CsOE0hDfZNa8PZ4sYCwFUxcg.png",
                            srcSet:
                              "/assets/img/J13CsOE0hDfZNa8PZ4sYCwFUxcg.png 512w, /assets/img/J13CsOE0hDfZNa8PZ4sYCwFUxcg.png 1024w, /assets/img/J13CsOE0hDfZNa8PZ4sYCwFUxcg.png 2048w, /assets/img/J13CsOE0hDfZNa8PZ4sYCwFUxcg.png 4096w, /assets/img/J13CsOE0hDfZNa8PZ4sYCwFUxcg.png 4109w",
                          },
                          className: "framer-khhp6q",
                          "data-framer-name": "image 183",
                          name: "image 183",
                        }),
                      }),
                      e(o, {
                        breakpoint: t,
                        overrides: {
                          tiAv0zJqn: {
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: "lazy",
                              sizes: "764px",
                              src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                              srcSet:
                                "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                            },
                          },
                          Z044CjP48: {
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: "lazy",
                              sizes: "764px",
                              src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                              srcSet:
                                "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                            },
                          },
                        },
                        children: e(n, {
                          background: {
                            alt: "",
                            fit: "fill",
                            loading: "lazy",
                            sizes: "764.1254px",
                            src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                            srcSet:
                              "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                          },
                          className: "framer-x9igyy",
                          "data-framer-name": "image 186",
                          name: "image 186",
                          transformTemplate: w,
                        }),
                      }),
                      e(o, {
                        breakpoint: t,
                        overrides: {
                          tiAv0zJqn: {
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: "lazy",
                              sizes: "327px",
                              src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                              srcSet:
                                "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                            },
                          },
                          Z044CjP48: {
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: "lazy",
                              sizes: "327px",
                              src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                              srcSet:
                                "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                            },
                          },
                        },
                        children: e(n, {
                          background: {
                            alt: "",
                            fit: "fill",
                            loading: "lazy",
                            sizes: "326.8293px",
                            src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                            srcSet:
                              "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                          },
                          className: "framer-123y0hj",
                          "data-framer-name": "image 187",
                          name: "image 187",
                          transformTemplate: b,
                        }),
                      }),
                      e(o, {
                        breakpoint: t,
                        overrides: {
                          tiAv0zJqn: {
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: "lazy",
                              sizes: "327px",
                              src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                              srcSet:
                                "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                            },
                          },
                          Z044CjP48: {
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: "lazy",
                              sizes: "327px",
                              src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                              srcSet:
                                "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                            },
                          },
                        },
                        children: e(n, {
                          background: {
                            alt: "",
                            fit: "fill",
                            loading: "lazy",
                            sizes: "326.8293px",
                            src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                            srcSet:
                              "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                          },
                          className: "framer-l0786b",
                          "data-framer-name": "image 188",
                          name: "image 188",
                          transformTemplate: k,
                        }),
                      }),
                      e(o, {
                        breakpoint: t,
                        overrides: {
                          tiAv0zJqn: {
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: "lazy",
                              sizes: "632px",
                              src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                              srcSet:
                                "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                            },
                            transformTemplate: ae,
                          },
                          Z044CjP48: {
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: "lazy",
                              sizes: "632px",
                              src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                              srcSet:
                                "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                            },
                            transformTemplate: ae,
                          },
                        },
                        children: e(n, {
                          background: {
                            alt: "",
                            fit: "fill",
                            loading: "lazy",
                            sizes: "631.738px",
                            src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                            srcSet:
                              "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                          },
                          className: "framer-c3lp9q",
                          "data-framer-name": "image 189",
                          name: "image 189",
                          transformTemplate: v,
                        }),
                      }),
                      e(o, {
                        breakpoint: t,
                        overrides: {
                          tiAv0zJqn: {
                            background: {
                              alt: "",
                              fit: "fill",
                              sizes: "487px",
                              src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                              srcSet:
                                "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                            },
                          },
                          Z044CjP48: {
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: "lazy",
                              sizes: "487px",
                              src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                              srcSet:
                                "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                            },
                          },
                        },
                        children: e(n, {
                          background: {
                            alt: "",
                            fit: "fill",
                            loading: "lazy",
                            sizes: "486.9221px",
                            src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                            srcSet:
                              "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                          },
                          className: "framer-8ieo2",
                          "data-framer-name": "image 190",
                          name: "image 190",
                          transformTemplate: C,
                        }),
                      }),
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fit",
                          positionX: "center",
                          positionY: "center",
                          sizes: "835px",
                          src: "/assets/img/hrqMFE3vCIoB6DsmlYRtW75faA.png",
                          srcSet:
                            "/assets/img/hrqMFE3vCIoB6DsmlYRtW75faA.png 512w, /assets/img/hrqMFE3vCIoB6DsmlYRtW75faA.png 1024w, /assets/img/hrqMFE3vCIoB6DsmlYRtW75faA.png 2048w, /assets/img/hrqMFE3vCIoB6DsmlYRtW75faA.png 3334w",
                        },
                        className: "framer-1kpqwp7",
                        "data-framer-name": "image 265",
                        name: "image 265",
                      }),
                      e(o, {
                        breakpoint: t,
                        overrides: {
                          tiAv0zJqn: {
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: "lazy",
                              sizes: "364px",
                              src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                              srcSet:
                                "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                            },
                          },
                          Z044CjP48: {
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: "lazy",
                              sizes: "364px",
                              src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                              srcSet:
                                "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                            },
                          },
                        },
                        children: e(n, {
                          background: {
                            alt: "",
                            fit: "fill",
                            loading: "lazy",
                            sizes: "364.1378px",
                            src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                            srcSet:
                              "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                          },
                          className: "framer-rake34",
                          "data-framer-name": "image 185",
                          name: "image 185",
                          transformTemplate: G,
                        }),
                      }),
                    ],
                  }),
                  e("div", {
                    className: "framer-udyxh6",
                    "data-framer-name": "shadow",
                    name: "shadow",
                  }),
                  e(n, {
                    background: {
                      alt: "",
                      fit: "fill",
                      loading: "lazy",
                      src: "/assets/img/t6QS2KL5lzO52uQ4LK45TQDLzBA.png",
                    },
                    className: "framer-r5sgei",
                    "data-framer-name": "5884",
                    name: "5884",
                  }),
                  e(n, {
                    background: {
                      alt: "",
                      fit: "fill",
                      loading: "lazy",
                      src: "/assets/img/STCIX0MCFGP6hsVN9nl6xCA34uA.png",
                    },
                    className: "framer-1500fe1",
                    "data-framer-name": "5888",
                    name: "5888",
                  }),
                ],
              }),
              a("div", {
                className: "framer-35zupt",
                "data-framer-name": "[SECTION]--Section-3",
                id: pe,
                name: "[SECTION]--Section-3",
                ref: de,
                children: [
                  a("div", {
                    className: "framer-10pjkfe",
                    "data-framer-name": "Background-1",
                    name: "Background-1",
                    children: [
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fit",
                          loading: "lazy",
                          positionX: "center",
                          positionY: "center",
                          sizes: "1028px",
                          src: "/assets/img/dqtQGfykuywjeZFCTOOMvJhaW0.png",
                          srcSet:
                            "/assets/img/dqtQGfykuywjeZFCTOOMvJhaW0.png 512w, /assets/img/dqtQGfykuywjeZFCTOOMvJhaW0.png 1024w, /assets/img/dqtQGfykuywjeZFCTOOMvJhaW0.png 2048w, /assets/img/dqtQGfykuywjeZFCTOOMvJhaW0.png 4096w, /assets/img/dqtQGfykuywjeZFCTOOMvJhaW0.png 4109w",
                        },
                        className: "framer-19z5g9",
                        "data-framer-name": "image 183",
                        name: "image 183",
                      }),
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fill",
                          loading: "lazy",
                          sizes: "764.1254px",
                          src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                          srcSet:
                            "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                        },
                        className: "framer-1uh86q2",
                        "data-framer-name": "image 186",
                        name: "image 186",
                        transformTemplate: w,
                      }),
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fill",
                          loading: "lazy",
                          sizes: "326.8293px",
                          src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                          srcSet:
                            "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                        },
                        className: "framer-1vckngv",
                        "data-framer-name": "image 187",
                        name: "image 187",
                        transformTemplate: b,
                      }),
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fill",
                          loading: "lazy",
                          sizes: "326.8293px",
                          src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                          srcSet:
                            "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                        },
                        className: "framer-1kpkwfu",
                        "data-framer-name": "image 188",
                        name: "image 188",
                        transformTemplate: k,
                      }),
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fill",
                          loading: "lazy",
                          sizes: "631.738px",
                          src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                          srcSet:
                            "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                        },
                        className: "framer-1tqycji",
                        "data-framer-name": "image 189",
                        name: "image 189",
                        transformTemplate: v,
                      }),
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fill",
                          loading: "lazy",
                          sizes: "486.9221px",
                          src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                          srcSet:
                            "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                        },
                        className: "framer-1ot0367",
                        "data-framer-name": "image 190",
                        name: "image 190",
                        transformTemplate: C,
                      }),
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fit",
                          loading: "lazy",
                          positionX: "center",
                          positionY: "center",
                          sizes: "835px",
                          src: "/assets/img/4RYCgRlaaU4lQpAK40Im72P116E.png",
                          srcSet:
                            "/assets/img/4RYCgRlaaU4lQpAK40Im72P116E.png 512w, /assets/img/4RYCgRlaaU4lQpAK40Im72P116E.png 1024w, /assets/img/4RYCgRlaaU4lQpAK40Im72P116E.png 2048w, /assets/img/4RYCgRlaaU4lQpAK40Im72P116E.png 3334w",
                        },
                        className: "framer-1lihght",
                        "data-framer-name": "image 265",
                        name: "image 265",
                      }),
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fill",
                          loading: "lazy",
                          sizes: "364.1378px",
                          src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                          srcSet:
                            "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                        },
                        className: "framer-ou5udj",
                        "data-framer-name": "image 185",
                        name: "image 185",
                        transformTemplate: G,
                      }),
                    ],
                  }),
                  e("div", {
                    className: "framer-19uar6f",
                    "data-framer-name": "shadow",
                    name: "shadow",
                  }),
                  a("div", {
                    className: "framer-1bde7r5",
                    "data-framer-name": "Frame 1160444746",
                    name: "Frame 1160444746",
                    children: [
                      a("div", {
                        className: "framer-1l2gser",
                        "data-framer-name": "Frame 1160444743",
                        name: "Frame 1160444743",
                        children: [
                          a("div", {
                            className: "framer-u46j7a",
                            "data-framer-name": "Card-1",
                            name: "Card-1",
                            children: [
                              a("div", {
                                className: "framer-1ntl0ni",
                                "data-framer-name": "Frame 1160444741",
                                name: "Frame 1160444741",
                                children: [
                                  e("div", {
                                    className: "framer-735cos",
                                    "data-framer-name": "Ellipse 51",
                                    name: "Ellipse 51",
                                  }),
                                  e("div", {
                                    className: "framer-iu0a6k",
                                    "data-framer-name": "Ellipse 52",
                                    name: "Ellipse 52",
                                  }),
                                  e("div", {
                                    className: "framer-1epd2l6",
                                    "data-framer-name": "Ellipse 53",
                                    name: "Ellipse 53",
                                  }),
                                  e("div", {
                                    className: "framer-1q38h9h",
                                    "data-framer-name": "Ellipse 49",
                                    name: "Ellipse 49",
                                  }),
                                  e("div", {
                                    className: "framer-19ex9bp",
                                    "data-framer-name": "Ellipse 50",
                                    name: "Ellipse 50",
                                  }),
                                  e("div", {
                                    className: "framer-1arip06",
                                    "data-framer-name": "Ellipse 54",
                                    name: "Ellipse 54",
                                  }),
                                  e("div", {
                                    className: "framer-9q3xb9",
                                    "data-framer-name": "Ellipse 56",
                                    name: "Ellipse 56",
                                  }),
                                  e("div", {
                                    className: "framer-3q73pv",
                                    "data-framer-name": "Ellipse 57",
                                    name: "Ellipse 57",
                                  }),
                                  e("div", {
                                    className: "framer-1iincja",
                                    "data-framer-name": "Ellipse 55",
                                    name: "Ellipse 55",
                                  }),
                                ],
                              }),
                              a("div", {
                                className: "framer-1rhbmif",
                                "data-framer-name": "Frame 1160444740",
                                name: "Frame 1160444740",
                                children: [
                                  a("div", {
                                    className: "framer-1pklv3w",
                                    "data-framer-name": "Frame 314",
                                    name: "Frame 314",
                                    children: [
                                      e(o, {
                                        breakpoint: t,
                                        overrides: {
                                          tiAv0zJqn: {
                                            children: e(r, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                                  "--framer-font-family":
                                                    '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                                  "--framer-font-size": "32px",
                                                  "--framer-letter-spacing":
                                                    "0px",
                                                  "--framer-line-height":
                                                    "137.5%",
                                                  "--framer-text-alignment":
                                                    "right",
                                                  "--framer-text-color":
                                                    "rgb(77, 18, 0)",
                                                },
                                                children: "CHOOSE A WALLET",
                                              }),
                                            }),
                                          },
                                        },
                                        children: e(i, {
                                          __fromCanvasComponent: !0,
                                          children: e(r, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                                "--framer-font-family":
                                                  '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                                "--framer-font-size": "38px",
                                                "--framer-letter-spacing":
                                                  "0px",
                                                "--framer-line-height":
                                                  "137.5%",
                                                "--framer-text-alignment":
                                                  "right",
                                                "--framer-text-color":
                                                  "rgb(77, 18, 0)",
                                              },
                                              children: "CHOOSE A WALLET",
                                            }),
                                          }),
                                          className: "framer-1cdhzrq",
                                          "data-framer-name": "Heading",
                                          fonts: [
                                            "CUSTOM;Cucciolo Rough Regular",
                                          ],
                                          name: "Heading",
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      e(o, {
                                        breakpoint: t,
                                        overrides: {
                                          tiAv0zJqn: {
                                            children: e(r, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "Q1VTVE9NO0NvbWljIFNhbnMgTVMgQm9sZA==",
                                                  "--framer-font-family":
                                                    '"Comic Sans MS Bold", "Comic Sans MS Bold Placeholder", sans-serif',
                                                  "--framer-letter-spacing":
                                                    "0px",
                                                  "--framer-line-height":
                                                    "160%",
                                                  "--framer-text-alignment":
                                                    "right",
                                                  "--framer-text-color":
                                                    "rgb(123, 0, 0)",
                                                },
                                                children:
                                                  "A Ethereum wallet is essential to use, trade, or hold $TACOCAT. Here are some good ones:",
                                              }),
                                            }),
                                          },
                                        },
                                        children: e(i, {
                                          __fromCanvasComponent: !0,
                                          children: e(r, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO0NvbWljIFNhbnMgTVMgQm9sZA==",
                                                "--framer-font-family":
                                                  '"Comic Sans MS Bold", "Comic Sans MS Bold Placeholder", sans-serif',
                                                "--framer-font-size": "19.55px",
                                                "--framer-letter-spacing":
                                                  "0px",
                                                "--framer-line-height": "160%",
                                                "--framer-text-alignment":
                                                  "right",
                                                "--framer-text-color":
                                                  "rgb(123, 0, 0)",
                                              },
                                              children:
                                                "A Ethereum wallet is essential to use, trade, or hold $TACOCAT. Here are some good ones:",
                                            }),
                                          }),
                                          className: "framer-1uon8ec",
                                          "data-framer-name":
                                            "A Ethereum wallet is essential to use, trade, or hold $TACOCAT. Here are some good ones:",
                                          fonts: ["CUSTOM;Comic Sans MS Bold"],
                                          name: "A Ethereum wallet is essential to use, trade, or hold $TACOCAT. Here are some good ones:",
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  e(p, {
                                    className: "framer-1segjuc",
                                    "data-framer-name": "Frame 1160444739",
                                    fill: "rgba(0,0,0,1)",
                                    intrinsicHeight: 45,
                                    intrinsicWidth: 253,
                                    name: "Frame 1160444739",
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a("div", {
                            className: "framer-1scd9aq",
                            "data-framer-name": "Card-2",
                            name: "Card-2",
                            children: [
                              a("div", {
                                className: "framer-1gvchdw",
                                "data-framer-name": "Frame 1160444742",
                                name: "Frame 1160444742",
                                children: [
                                  e("div", {
                                    className: "framer-xb5gn",
                                    "data-framer-name": "Ellipse 51",
                                    name: "Ellipse 51",
                                  }),
                                  e("div", {
                                    className: "framer-1hx6m5h",
                                    "data-framer-name": "Ellipse 52",
                                    name: "Ellipse 52",
                                  }),
                                  e("div", {
                                    className: "framer-15wp73b",
                                    "data-framer-name": "Ellipse 53",
                                    name: "Ellipse 53",
                                  }),
                                  e("div", {
                                    className: "framer-yr6wa0",
                                    "data-framer-name": "Ellipse 49",
                                    name: "Ellipse 49",
                                  }),
                                  e("div", {
                                    className: "framer-1utb6hy",
                                    "data-framer-name": "Ellipse 50",
                                    name: "Ellipse 50",
                                  }),
                                  e("div", {
                                    className: "framer-10jvimi",
                                    "data-framer-name": "Ellipse 54",
                                    name: "Ellipse 54",
                                  }),
                                  e("div", {
                                    className: "framer-s017ya",
                                    "data-framer-name": "Ellipse 58",
                                    name: "Ellipse 58",
                                  }),
                                  e("div", {
                                    className: "framer-19york1",
                                    "data-framer-name": "Ellipse 56",
                                    name: "Ellipse 56",
                                  }),
                                  e("div", {
                                    className: "framer-1ck2iqt",
                                    "data-framer-name": "Ellipse 57",
                                    name: "Ellipse 57",
                                  }),
                                  e("div", {
                                    className: "framer-3krd80",
                                    "data-framer-name": "Ellipse 55",
                                    name: "Ellipse 55",
                                  }),
                                ],
                              }),
                              a("div", {
                                className: "framer-19h00co",
                                "data-framer-name": "Frame 1160444740",
                                name: "Frame 1160444740",
                                children: [
                                  a("div", {
                                    className: "framer-hn8skh",
                                    "data-framer-name": "Frame 1160444740",
                                    name: "Frame 1160444740",
                                    children: [
                                      e(o, {
                                        breakpoint: t,
                                        overrides: {
                                          tiAv0zJqn: {
                                            children: e(r, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                                  "--framer-font-family":
                                                    '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                                  "--framer-font-size": "32px",
                                                  "--framer-letter-spacing":
                                                    "0px",
                                                  "--framer-line-height":
                                                    "137.5%",
                                                  "--framer-text-alignment":
                                                    "right",
                                                  "--framer-text-color":
                                                    "rgb(61, 25, 0)",
                                                },
                                                children: "exchange $tacocat",
                                              }),
                                            }),
                                          },
                                        },
                                        children: e(i, {
                                          __fromCanvasComponent: !0,
                                          children: e(r, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                                "--framer-font-family":
                                                  '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                                "--framer-font-size": "38px",
                                                "--framer-letter-spacing":
                                                  "0px",
                                                "--framer-line-height":
                                                  "137.5%",
                                                "--framer-text-alignment":
                                                  "right",
                                                "--framer-text-color":
                                                  "rgb(61, 25, 0)",
                                              },
                                              children: "exchange $tacocat",
                                            }),
                                          }),
                                          className: "framer-1tucigr",
                                          "data-framer-name": "Heading",
                                          fonts: [
                                            "CUSTOM;Cucciolo Rough Regular",
                                          ],
                                          name: "Heading",
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      e(o, {
                                        breakpoint: t,
                                        overrides: {
                                          tiAv0zJqn: {
                                            children: e(r, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "Q1VTVE9NO0NvbWljIFNhbnMgTVMgQm9sZA==",
                                                  "--framer-font-family":
                                                    '"Comic Sans MS Bold", "Comic Sans MS Bold Placeholder", sans-serif',
                                                  "--framer-letter-spacing":
                                                    "0px",
                                                  "--framer-line-height":
                                                    "160%",
                                                  "--framer-text-alignment":
                                                    "right",
                                                  "--framer-text-color":
                                                    "rgb(61, 25, 0)",
                                                },
                                                children:
                                                  "You can trade your $ETH for $TACOCAT in the following venues:",
                                              }),
                                            }),
                                          },
                                        },
                                        children: e(i, {
                                          __fromCanvasComponent: !0,
                                          children: e(r, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO0NvbWljIFNhbnMgTVMgQm9sZA==",
                                                "--framer-font-family":
                                                  '"Comic Sans MS Bold", "Comic Sans MS Bold Placeholder", sans-serif',
                                                "--framer-font-size": "19.55px",
                                                "--framer-letter-spacing":
                                                  "0px",
                                                "--framer-line-height": "160%",
                                                "--framer-text-alignment":
                                                  "right",
                                                "--framer-text-color":
                                                  "rgb(61, 25, 0)",
                                              },
                                              children:
                                                "You can trade your $ETH for $TACOCAT in the following venues:",
                                            }),
                                          }),
                                          className: "framer-orfmtr",
                                          "data-framer-name":
                                            "You can trade your $ETH for $TACOCAT in the following venues:",
                                          fonts: ["CUSTOM;Comic Sans MS Bold"],
                                          name: "You can trade your $ETH for $TACOCAT in the following venues:",
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  e(p, {
                                    className: "framer-1tkpx63",
                                    "data-framer-name": "Frame 1160444741",
                                    fill: "rgba(0,0,0,1)",
                                    intrinsicHeight: 45,
                                    intrinsicWidth: 115,
                                    name: "Frame 1160444741",
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      a("div", {
                        className: "framer-mfdp0l",
                        "data-framer-name": "Card-3",
                        name: "Card-3",
                        children: [
                          a("div", {
                            className: "framer-8qyib",
                            "data-framer-name": "Frame 1160444745",
                            name: "Frame 1160444745",
                            children: [
                              e("div", {
                                className: "framer-1dv0ekp",
                                "data-framer-name": "Ellipse 51",
                                name: "Ellipse 51",
                              }),
                              e("div", {
                                className: "framer-15qgqr0",
                                "data-framer-name": "Ellipse 52",
                                name: "Ellipse 52",
                              }),
                              e("div", {
                                className: "framer-d60azw",
                                "data-framer-name": "Ellipse 58",
                                name: "Ellipse 58",
                              }),
                              e("div", {
                                className: "framer-rbvsd6",
                                "data-framer-name": "Ellipse 53",
                                name: "Ellipse 53",
                              }),
                              e("div", {
                                className: "framer-wniebb",
                                "data-framer-name": "Ellipse 49",
                                name: "Ellipse 49",
                              }),
                              e("div", {
                                className: "framer-1vihsje",
                                "data-framer-name": "Ellipse 50",
                                name: "Ellipse 50",
                              }),
                              e("div", {
                                className: "framer-1b297ey",
                                "data-framer-name": "Ellipse 54",
                                name: "Ellipse 54",
                              }),
                              e("div", {
                                className: "framer-8glzik",
                                "data-framer-name": "Ellipse 56",
                                name: "Ellipse 56",
                              }),
                              e("div", {
                                className: "framer-1yr3p61",
                                "data-framer-name": "Ellipse 57",
                                name: "Ellipse 57",
                              }),
                              e("div", {
                                className: "framer-1d5afmi",
                                "data-framer-name": "Ellipse 55",
                                name: "Ellipse 55",
                              }),
                            ],
                          }),
                          a("div", {
                            className: "framer-k87eq4",
                            "data-framer-name": "Frame 1160444744",
                            name: "Frame 1160444744",
                            children: [
                              a("div", {
                                className: "framer-2vb1jb",
                                "data-framer-name": "Frame 313",
                                name: "Frame 313",
                                children: [
                                  e(o, {
                                    breakpoint: t,
                                    overrides: {
                                      tiAv0zJqn: {
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                              "--framer-font-family":
                                                '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                              "--framer-font-size": "32px",
                                              "--framer-letter-spacing": "0px",
                                              "--framer-line-height": "137.5%",
                                              "--framer-text-alignment":
                                                "right",
                                              "--framer-text-color":
                                                "rgb(77, 18, 0)",
                                            },
                                            children: "buy ETH",
                                          }),
                                        }),
                                      },
                                      Z044CjP48: {
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                              "--framer-font-family":
                                                '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                              "--framer-font-size": "38px",
                                              "--framer-letter-spacing": "0px",
                                              "--framer-line-height": "137.5%",
                                              "--framer-text-alignment":
                                                "right",
                                              "--framer-text-color":
                                                "rgb(77, 18, 0)",
                                            },
                                            children: "buy ETH",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(i, {
                                      __fromCanvasComponent: !0,
                                      children: e(r, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                            "--framer-font-size": "38px",
                                            "--framer-letter-spacing": "0px",
                                            "--framer-line-height": "137.5%",
                                            "--framer-text-color":
                                              "rgb(77, 18, 0)",
                                          },
                                          children: "buy ETH",
                                        }),
                                      }),
                                      className: "framer-1yexj4a",
                                      "data-framer-name": "Heading",
                                      fonts: ["CUSTOM;Cucciolo Rough Regular"],
                                      name: "Heading",
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  e(o, {
                                    breakpoint: t,
                                    overrides: {
                                      tiAv0zJqn: {
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "Q1VTVE9NO0NvbWljIFNhbnMgTVMgQm9sZA==",
                                              "--framer-font-family":
                                                '"Comic Sans MS Bold", "Comic Sans MS Bold Placeholder", sans-serif',
                                              "--framer-letter-spacing": "0px",
                                              "--framer-line-height": "160%",
                                              "--framer-text-alignment":
                                                "right",
                                              "--framer-text-color":
                                                "rgb(123, 37, 0)",
                                            },
                                            children:
                                              "$ETH can be purchased across all major exchanges:",
                                          }),
                                        }),
                                      },
                                      Z044CjP48: {
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "Q1VTVE9NO0NvbWljIFNhbnMgTVMgQm9sZA==",
                                              "--framer-font-family":
                                                '"Comic Sans MS Bold", "Comic Sans MS Bold Placeholder", sans-serif',
                                              "--framer-font-size": "19.55px",
                                              "--framer-letter-spacing": "0px",
                                              "--framer-line-height": "160%",
                                              "--framer-text-alignment":
                                                "right",
                                              "--framer-text-color":
                                                "rgb(123, 37, 0)",
                                            },
                                            children:
                                              "$ETH can be purchased across all major exchanges:",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(i, {
                                      __fromCanvasComponent: !0,
                                      children: e(r, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO0NvbWljIFNhbnMgTVMgQm9sZA==",
                                            "--framer-font-family":
                                              '"Comic Sans MS Bold", "Comic Sans MS Bold Placeholder", sans-serif',
                                            "--framer-font-size": "19.55px",
                                            "--framer-letter-spacing": "0px",
                                            "--framer-line-height": "160%",
                                            "--framer-text-color":
                                              "rgb(123, 37, 0)",
                                          },
                                          children:
                                            "$ETH can be purchased across all major exchanges:",
                                        }),
                                      }),
                                      className: "framer-1ls4pg7",
                                      "data-framer-name":
                                        "$ETH can be purchased across all major exchanges:",
                                      fonts: ["CUSTOM;Comic Sans MS Bold"],
                                      name: "$ETH can be purchased across all major exchanges:",
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                              e(p, {
                                className: "framer-h6zoha",
                                "data-framer-name": "Frame 1160444739",
                                fill: "rgba(0,0,0,1)",
                                intrinsicHeight: 46,
                                intrinsicWidth: 253,
                                name: "Frame 1160444739",
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  a("div", {
                    className: "framer-1lpnx2r",
                    "data-framer-name": "Frame 1160444757",
                    name: "Frame 1160444757",
                    children: [
                      e(o, {
                        breakpoint: t,
                        overrides: {
                          tiAv0zJqn: {
                            children: e(r, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                  "--framer-font-family":
                                    '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                  "--framer-font-size": "60px",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-transform": "uppercase",
                                },
                                children: "how to  buy?",
                              }),
                            }),
                          },
                          Z044CjP48: {
                            children: e(r, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                  "--framer-font-family":
                                    '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                  "--framer-font-size": "100px",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-transform": "uppercase",
                                },
                                children: "how to  buy?",
                              }),
                            }),
                          },
                        },
                        children: e(i, {
                          __fromCanvasComponent: !0,
                          children: e(r, {
                            children: e("p", {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                "--framer-font-family":
                                  '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                "--framer-font-size": "132px",
                                "--framer-text-alignment": "center",
                                "--framer-text-transform": "uppercase",
                              },
                              children: "how to  buy?",
                            }),
                          }),
                          className: "framer-1o6sh19",
                          "data-framer-name": "Heading-3",
                          fonts: ["CUSTOM;Cucciolo Rough Regular"],
                          name: "Heading-3",
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                      e(o, {
                        breakpoint: t,
                        overrides: {
                          tiAv0zJqn: {
                            children: e(r, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                  "--framer-font-family":
                                    '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                  "--framer-font-size": "60px",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                  "--framer-text-transform": "uppercase",
                                },
                                children: "how to  buy?",
                              }),
                            }),
                          },
                          Z044CjP48: {
                            children: e(r, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                  "--framer-font-family":
                                    '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                  "--framer-font-size": "100px",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                  "--framer-text-transform": "uppercase",
                                },
                                children: "how to  buy?",
                              }),
                            }),
                          },
                        },
                        children: e(i, {
                          __fromCanvasComponent: !0,
                          children: e(r, {
                            children: e("p", {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                "--framer-font-family":
                                  '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                "--framer-font-size": "132px",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(255, 255, 255)",
                                "--framer-text-transform": "uppercase",
                              },
                              children: "how to  buy?",
                            }),
                          }),
                          className: "framer-1rdopi8",
                          "data-framer-name": "Heading-3",
                          fonts: ["CUSTOM;Cucciolo Rough Regular"],
                          name: "Heading-3",
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              a("div", {
                className: "framer-1dt7u6m",
                "data-framer-name": "Section-3",
                id: ge,
                name: "Section-3",
                ref: he,
                children: [
                  e("div", {
                    className: "framer-17ht1ue",
                    "data-framer-name": "shadow",
                    name: "shadow",
                  }),
                  a("div", {
                    className: "framer-115ho2v",
                    "data-framer-name": "Frame 1160444747",
                    name: "Frame 1160444747",
                    children: [
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fill",
                          loading: "lazy",
                          src: "/assets/img/qFPo7JEfNEv8IKeAL65l1dTfZA.png",
                        },
                        className: "framer-1a7lbld",
                        "data-framer-name": "5903",
                        name: "5903",
                        transformTemplate: je,
                      }),
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fill",
                          loading: "lazy",
                          sizes: "219.2929px",
                          src: "/assets/img/xtXd5e9XgZXZDAeYHpkZ1Idgew.png",
                          srcSet:
                            "/assets/img/xtXd5e9XgZXZDAeYHpkZ1Idgew.png 512w, /assets/img/xtXd5e9XgZXZDAeYHpkZ1Idgew.png 1024w, /assets/img/xtXd5e9XgZXZDAeYHpkZ1Idgew.png 2000w",
                        },
                        className: "framer-qwcgqa",
                        "data-framer-name": "5890",
                        name: "5890",
                        transformTemplate: Te,
                      }),
                      e(o, {
                        breakpoint: t,
                        overrides: {
                          tiAv0zJqn: {
                            background: {
                              alt: "",
                              fit: "fit",
                              loading: "lazy",
                              positionX: "center",
                              positionY: "center",
                              sizes: "412px",
                              src: "/assets/img/FM7YMf4RWEoWQzmLWSEh4jvxEBE.png",
                              srcSet:
                                "/assets/img/FM7YMf4RWEoWQzmLWSEh4jvxEBE.png 512w, /assets/img/FM7YMf4RWEoWQzmLWSEh4jvxEBE.png 1024w, /assets/img/FM7YMf4RWEoWQzmLWSEh4jvxEBE.png 1878w",
                            },
                          },
                          Z044CjP48: {
                            background: {
                              alt: "",
                              fit: "fit",
                              loading: "lazy",
                              positionX: "center",
                              positionY: "center",
                              sizes: "412px",
                              src: "/assets/img/FM7YMf4RWEoWQzmLWSEh4jvxEBE.png",
                              srcSet:
                                "/assets/img/FM7YMf4RWEoWQzmLWSEh4jvxEBE.png 512w, /assets/img/FM7YMf4RWEoWQzmLWSEh4jvxEBE.png 1024w, /assets/img/FM7YMf4RWEoWQzmLWSEh4jvxEBE.png 1878w",
                            },
                          },
                        },
                        children: e(n, {
                          background: {
                            alt: "",
                            fit: "fit",
                            loading: "lazy",
                            positionX: "center",
                            positionY: "center",
                            sizes: "468px",
                            src: "/assets/img/FM7YMf4RWEoWQzmLWSEh4jvxEBE.png",
                            srcSet:
                              "/assets/img/FM7YMf4RWEoWQzmLWSEh4jvxEBE.png 512w, /assets/img/FM7YMf4RWEoWQzmLWSEh4jvxEBE.png 1024w, /assets/img/FM7YMf4RWEoWQzmLWSEh4jvxEBE.png 1878w",
                          },
                          className: "framer-12f5gch",
                          "data-framer-name": "5893",
                          name: "5893",
                        }),
                      }),
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fill",
                          loading: "lazy",
                          src: "/assets/img/MhrJMX7A9ClMiyNjAckKwnH7hAo.png",
                        },
                        className: "framer-jglsce",
                        "data-framer-name": "5895",
                        name: "5895",
                        transformTemplate: Ie,
                      }),
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fit",
                          loading: "lazy",
                          positionX: "center",
                          positionY: "center",
                          sizes: "250px",
                          src: "/assets/img/05uuB2otSVsiqMEqo2jsvmCaqg.png",
                          srcSet:
                            "/assets/img/05uuB2otSVsiqMEqo2jsvmCaqg.png 512w, /assets/img/05uuB2otSVsiqMEqo2jsvmCaqg.png 1007w",
                        },
                        className: "framer-ueqi0f",
                        "data-framer-name": "5899",
                        name: "5899",
                      }),
                      a("div", {
                        className: "framer-1jb0hua",
                        "data-framer-name": "Frame 1160444759",
                        name: "Frame 1160444759",
                        children: [
                          a("div", {
                            className: "framer-16iu5dg",
                            "data-framer-name": "Frame 1160444758",
                            name: "Frame 1160444758",
                            children: [
                              a("div", {
                                className: "framer-1tqpp1w",
                                "data-framer-name": "Frame 1160444724",
                                name: "Frame 1160444724",
                                children: [
                                  e(o, {
                                    breakpoint: t,
                                    overrides: {
                                      tiAv0zJqn: {
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                              "--framer-font-family":
                                                '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                              "--framer-font-size": "72px",
                                              "--framer-line-height": "125%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-transform":
                                                "uppercase",
                                            },
                                            children: "join the ",
                                          }),
                                        }),
                                      },
                                      Z044CjP48: {
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                              "--framer-font-family":
                                                '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                              "--framer-font-size": "92px",
                                              "--framer-line-height": "125%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-transform":
                                                "uppercase",
                                            },
                                            children: "join the ",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(i, {
                                      __fromCanvasComponent: !0,
                                      children: e(r, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                            "--framer-font-size": "132px",
                                            "--framer-line-height": "125%",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-transform":
                                              "uppercase",
                                          },
                                          children: "join the ",
                                        }),
                                      }),
                                      className: "framer-bqgahx",
                                      "data-framer-name": "Heading-3",
                                      fonts: ["CUSTOM;Cucciolo Rough Regular"],
                                      name: "Heading-3",
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  e(o, {
                                    breakpoint: t,
                                    overrides: {
                                      tiAv0zJqn: {
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                              "--framer-font-family":
                                                '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                              "--framer-font-size": "72px",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(199, 83, 0)",
                                              "--framer-text-transform":
                                                "uppercase",
                                            },
                                            children: "$Tacocat ",
                                          }),
                                        }),
                                      },
                                      Z044CjP48: {
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                              "--framer-font-family":
                                                '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                              "--framer-font-size": "92px",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(199, 83, 0)",
                                              "--framer-text-transform":
                                                "uppercase",
                                            },
                                            children: "$Tacocat ",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(i, {
                                      __fromCanvasComponent: !0,
                                      children: e(r, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                            "--framer-font-size": "132px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(199, 83, 0)",
                                            "--framer-text-transform":
                                              "uppercase",
                                          },
                                          children: "$Tacocat ",
                                        }),
                                      }),
                                      className: "framer-1dkmger",
                                      "data-framer-name": "Heading-3/yellow",
                                      fonts: ["CUSTOM;Cucciolo Rough Regular"],
                                      name: "Heading-3/yellow",
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                              e(o, {
                                breakpoint: t,
                                overrides: {
                                  tiAv0zJqn: {
                                    children: e(r, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                          "--framer-font-size": "72px",
                                          "--framer-line-height": "125%",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-transform":
                                            "uppercase",
                                        },
                                        children: "Revolution",
                                      }),
                                    }),
                                  },
                                  Z044CjP48: {
                                    children: e(r, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                          "--framer-font-size": "100px",
                                          "--framer-line-height": "125%",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-transform":
                                            "uppercase",
                                        },
                                        children: "Revolution",
                                      }),
                                    }),
                                  },
                                },
                                children: e(i, {
                                  __fromCanvasComponent: !0,
                                  children: e(r, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                        "--framer-font-family":
                                          '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                        "--framer-font-size": "132px",
                                        "--framer-line-height": "125%",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-transform": "uppercase",
                                      },
                                      children: "Revolution",
                                    }),
                                  }),
                                  className: "framer-1wvihv4",
                                  "data-framer-name": "Heading-3",
                                  fonts: ["CUSTOM;Cucciolo Rough Regular"],
                                  name: "Heading-3",
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          a("div", {
                            className: "framer-1u34e0m",
                            "data-framer-name": "Frame 427319151",
                            name: "Frame 427319151",
                            children: [
                              a("div", {
                                className: "framer-3g1dvv",
                                "data-framer-name": "Frame 1160444724",
                                name: "Frame 1160444724",
                                children: [
                                  e(o, {
                                    breakpoint: t,
                                    overrides: {
                                      tiAv0zJqn: {
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                              "--framer-font-family":
                                                '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                              "--framer-font-size": "72px",
                                              "--framer-line-height": "125%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                              "--framer-text-transform":
                                                "uppercase",
                                            },
                                            children: "join the ",
                                          }),
                                        }),
                                      },
                                      Z044CjP48: {
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                              "--framer-font-family":
                                                '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                              "--framer-font-size": "92px",
                                              "--framer-line-height": "125%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                              "--framer-text-transform":
                                                "uppercase",
                                            },
                                            children: "join the ",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(i, {
                                      __fromCanvasComponent: !0,
                                      children: e(r, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                            "--framer-font-size": "132px",
                                            "--framer-line-height": "125%",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                            "--framer-text-transform":
                                              "uppercase",
                                          },
                                          children: "join the ",
                                        }),
                                      }),
                                      className: "framer-xxv9st",
                                      "data-framer-name": "Heading-3",
                                      fonts: ["CUSTOM;Cucciolo Rough Regular"],
                                      name: "Heading-3",
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  e(o, {
                                    breakpoint: t,
                                    overrides: {
                                      tiAv0zJqn: {
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                              "--framer-font-family":
                                                '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                              "--framer-font-size": "72px",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-transform":
                                                "uppercase",
                                            },
                                            children: e("span", {
                                              "data-text-fill": "true",
                                              style: {
                                                backgroundImage:
                                                  "linear-gradient(rgb(255, 205, 40) 0%, rgb(250, 132, 3) 100%)",
                                              },
                                              children: "$Tacocat ",
                                            }),
                                          }),
                                        }),
                                      },
                                      Z044CjP48: {
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                              "--framer-font-family":
                                                '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                              "--framer-font-size": "92px",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-transform":
                                                "uppercase",
                                            },
                                            children: e("span", {
                                              "data-text-fill": "true",
                                              style: {
                                                backgroundImage:
                                                  "linear-gradient(rgb(255, 205, 40) 0%, rgb(250, 132, 3) 100%)",
                                              },
                                              children: "$Tacocat ",
                                            }),
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(i, {
                                      __fromCanvasComponent: !0,
                                      children: e(r, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                            "--framer-font-size": "132px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-transform":
                                              "uppercase",
                                          },
                                          children: e("span", {
                                            "data-text-fill": "true",
                                            style: {
                                              backgroundImage:
                                                "linear-gradient(rgb(255, 205, 40) 0%, rgb(250, 132, 3) 100%)",
                                            },
                                            children: "$Tacocat ",
                                          }),
                                        }),
                                      }),
                                      className: "framer-18xsfsu",
                                      "data-framer-name": "Heading-3/yellow",
                                      fonts: ["CUSTOM;Cucciolo Rough Regular"],
                                      name: "Heading-3/yellow",
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                              e(o, {
                                breakpoint: t,
                                overrides: {
                                  tiAv0zJqn: {
                                    children: e(r, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                          "--framer-font-size": "72px",
                                          "--framer-line-height": "125%",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                          "--framer-text-transform":
                                            "uppercase",
                                        },
                                        children: "Revolution",
                                      }),
                                    }),
                                  },
                                  Z044CjP48: {
                                    children: e(r, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                          "--framer-font-size": "100px",
                                          "--framer-line-height": "125%",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                          "--framer-text-transform":
                                            "uppercase",
                                        },
                                        children: "Revolution",
                                      }),
                                    }),
                                  },
                                },
                                children: e(i, {
                                  __fromCanvasComponent: !0,
                                  children: e(r, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                        "--framer-font-family":
                                          '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                        "--framer-font-size": "132px",
                                        "--framer-line-height": "125%",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                        "--framer-text-transform": "uppercase",
                                      },
                                      children: "Revolution",
                                    }),
                                  }),
                                  className: "framer-urz4wz",
                                  "data-framer-name": "Heading-3",
                                  fonts: ["CUSTOM;Cucciolo Rough Regular"],
                                  name: "Heading-3",
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              a("div", {
                className: "framer-1xn8ik",
                "data-framer-name": "[SECTION]--Footer",
                id: xe,
                name: "[SECTION]--Footer",
                ref: ue,
                children: [
                  a("div", {
                    className: "framer-tier9f",
                    "data-framer-name": "Marquee-scroll-2",
                    name: "Marquee-scroll-2",
                    children: [
                      a("div", {
                        className: "framer-wzmmig",
                        "data-framer-name": "Frame 1160444752",
                        name: "Frame 1160444752",
                        children: [
                          e("div", {
                            className: "framer-143lp6p",
                            "data-framer-name": "Frame 1160444751",
                            name: "Frame 1160444751",
                            children: a("div", {
                              className: "framer-xiqvgm",
                              "data-framer-name": "Group 427319143",
                              name: "Group 427319143",
                              children: [
                                e(n, {
                                  background: {
                                    alt: "",
                                    fit: "fit",
                                    loading: "lazy",
                                    positionX: "center",
                                    positionY: "center",
                                    src: "/assets/img/lzx4nAagFuSAsmYlFREmLTFsDw.png",
                                  },
                                  className: "framer-1uon6dw",
                                  "data-framer-name": "5891",
                                  name: "5891",
                                }),
                                e(o, {
                                  breakpoint: t,
                                  overrides: {
                                    tiAv0zJqn: {
                                      children: e(r, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Um9ib3RvLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Roboto", "Roboto Placeholder", sans-serif',
                                            "--framer-font-size": "17px",
                                          },
                                          children: "\u{1F525}",
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(i, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "43.95px",
                                        },
                                        children: "\u{1F525}",
                                      }),
                                    }),
                                    className: "framer-1v13bt9",
                                    "data-framer-name": "\u{1F525}",
                                    fonts: ["GF;Roboto-regular"],
                                    name: "\u{1F525}",
                                    transformTemplate: d,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                          }),
                          e(o, {
                            breakpoint: t,
                            overrides: {
                              tiAv0zJqn: {
                                children: e(r, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                      "--framer-font-size": "32px",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                      "--framer-text-transform": "uppercase",
                                    },
                                    children: "The ticker is backwards",
                                  }),
                                }),
                              },
                            },
                            children: e(i, {
                              __fromCanvasComponent: !0,
                              children: e(r, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                    "--framer-font-family":
                                      '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                    "--framer-font-size": "48px",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                    "--framer-text-transform": "uppercase",
                                  },
                                  children: "The ticker is backwards",
                                }),
                              }),
                              className: "framer-uhm8iz",
                              "data-framer-name": "The ticker is backwards",
                              fonts: ["CUSTOM;Cucciolo Rough Regular"],
                              name: "The ticker is backwards",
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                      a("div", {
                        className: "framer-bgcgpq",
                        "data-framer-name": "Frame 1160444754",
                        name: "Frame 1160444754",
                        children: [
                          a("div", {
                            className: "framer-5crfg5",
                            "data-framer-name": "Frame 1160444751",
                            name: "Frame 1160444751",
                            children: [
                              z() &&
                                a("div", {
                                  className: "framer-1nsb46j hidden-1um2g67",
                                  "data-framer-name": "Group 427319143",
                                  name: "Group 427319143",
                                  children: [
                                    e(n, {
                                      background: {
                                        alt: "",
                                        fit: "fit",
                                        loading: "lazy",
                                        positionX: "center",
                                        positionY: "center",
                                        src: "/assets/img/lzx4nAagFuSAsmYlFREmLTFsDw.png",
                                      },
                                      className: "framer-cwt2gw",
                                      "data-framer-name": "5891",
                                      name: "5891",
                                    }),
                                    e(i, {
                                      __fromCanvasComponent: !0,
                                      children: e(r, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Um9ib3RvLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Roboto", "Roboto Placeholder", sans-serif',
                                            "--framer-font-size": "43.95px",
                                          },
                                          children: "\u{1F525}",
                                        }),
                                      }),
                                      className: "framer-1ahczeu",
                                      "data-framer-name": "\u{1F525}",
                                      fonts: ["GF;Roboto-regular"],
                                      name: "\u{1F525}",
                                      transformTemplate: d,
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              J() &&
                                a("div", {
                                  className:
                                    "framer-14olldn hidden-72rtr7 hidden-1qws17d",
                                  "data-framer-name": "Group 427319143",
                                  name: "Group 427319143",
                                  children: [
                                    e(o, {
                                      breakpoint: t,
                                      overrides: {
                                        tiAv0zJqn: {
                                          background: {
                                            alt: "",
                                            fit: "fit",
                                            loading: "lazy",
                                            positionX: "center",
                                            positionY: "center",
                                            src: "/assets/img/lzx4nAagFuSAsmYlFREmLTFsDw.png",
                                          },
                                        },
                                      },
                                      children: e(n, {
                                        background: {
                                          alt: "",
                                          fit: "fit",
                                          positionX: "center",
                                          positionY: "center",
                                          src: "/assets/img/lzx4nAagFuSAsmYlFREmLTFsDw.png",
                                        },
                                        className: "framer-5puitw",
                                        "data-framer-name": "5891",
                                        name: "5891",
                                      }),
                                    }),
                                    e(i, {
                                      __fromCanvasComponent: !0,
                                      children: e(r, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Um9ib3RvLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Roboto", "Roboto Placeholder", sans-serif',
                                            "--framer-font-size": "17px",
                                          },
                                          children: "\u{1F525}",
                                        }),
                                      }),
                                      className: "framer-1gmqp5o",
                                      "data-framer-name": "\u{1F525}",
                                      fonts: ["GF;Roboto-regular"],
                                      name: "\u{1F525}",
                                      transformTemplate: d,
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          e(o, {
                            breakpoint: t,
                            overrides: {
                              tiAv0zJqn: {
                                children: e(r, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                      "--framer-font-size": "32px",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                      "--framer-text-transform": "uppercase",
                                    },
                                    children: "The ticker is backwards",
                                  }),
                                }),
                              },
                            },
                            children: e(i, {
                              __fromCanvasComponent: !0,
                              children: e(r, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                    "--framer-font-family":
                                      '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                    "--framer-font-size": "48px",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                    "--framer-text-transform": "uppercase",
                                  },
                                  children: "The ticker is backwards",
                                }),
                              }),
                              className: "framer-1pcspp9",
                              "data-framer-name": "The ticker is backwards",
                              fonts: ["CUSTOM;Cucciolo Rough Regular"],
                              name: "The ticker is backwards",
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                      a("div", {
                        className: "framer-id36f7",
                        "data-framer-name": "Frame 1160444755",
                        name: "Frame 1160444755",
                        children: [
                          a("div", {
                            className: "framer-aretcy",
                            "data-framer-name": "Frame 1160444751",
                            name: "Frame 1160444751",
                            children: [
                              z() &&
                                a("div", {
                                  className: "framer-px023 hidden-1um2g67",
                                  "data-framer-name": "Group 427319143",
                                  name: "Group 427319143",
                                  children: [
                                    e(n, {
                                      background: {
                                        alt: "",
                                        fit: "fit",
                                        loading: "lazy",
                                        positionX: "center",
                                        positionY: "center",
                                        src: "/assets/img/lzx4nAagFuSAsmYlFREmLTFsDw.png",
                                      },
                                      className: "framer-5kr8wd",
                                      "data-framer-name": "5891",
                                      name: "5891",
                                    }),
                                    e(i, {
                                      __fromCanvasComponent: !0,
                                      children: e(r, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Um9ib3RvLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Roboto", "Roboto Placeholder", sans-serif',
                                            "--framer-font-size": "43.95px",
                                          },
                                          children: "\u{1F525}",
                                        }),
                                      }),
                                      className: "framer-qqk9eh",
                                      "data-framer-name": "\u{1F525}",
                                      fonts: ["GF;Roboto-regular"],
                                      name: "\u{1F525}",
                                      transformTemplate: d,
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              J() &&
                                a("div", {
                                  className:
                                    "framer-tvccrt hidden-72rtr7 hidden-1qws17d",
                                  "data-framer-name": "Group 427319143",
                                  name: "Group 427319143",
                                  children: [
                                    e(o, {
                                      breakpoint: t,
                                      overrides: {
                                        tiAv0zJqn: {
                                          background: {
                                            alt: "",
                                            fit: "fit",
                                            loading: "lazy",
                                            positionX: "center",
                                            positionY: "center",
                                            src: "/assets/img/lzx4nAagFuSAsmYlFREmLTFsDw.png",
                                          },
                                        },
                                      },
                                      children: e(n, {
                                        background: {
                                          alt: "",
                                          fit: "fit",
                                          positionX: "center",
                                          positionY: "center",
                                          src: "/assets/img/lzx4nAagFuSAsmYlFREmLTFsDw.png",
                                        },
                                        className: "framer-tuiu41",
                                        "data-framer-name": "5891",
                                        name: "5891",
                                      }),
                                    }),
                                    e(i, {
                                      __fromCanvasComponent: !0,
                                      children: e(r, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Um9ib3RvLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Roboto", "Roboto Placeholder", sans-serif',
                                            "--framer-font-size": "17px",
                                          },
                                          children: "\u{1F525}",
                                        }),
                                      }),
                                      className: "framer-1urfeku",
                                      "data-framer-name": "\u{1F525}",
                                      fonts: ["GF;Roboto-regular"],
                                      name: "\u{1F525}",
                                      transformTemplate: d,
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          e(o, {
                            breakpoint: t,
                            overrides: {
                              tiAv0zJqn: {
                                children: e(r, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                      "--framer-font-size": "32px",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                      "--framer-text-transform": "uppercase",
                                    },
                                    children: "The ticker is backwards",
                                  }),
                                }),
                              },
                            },
                            children: e(i, {
                              __fromCanvasComponent: !0,
                              children: e(r, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                    "--framer-font-family":
                                      '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                    "--framer-font-size": "48px",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                    "--framer-text-transform": "uppercase",
                                  },
                                  children: "The ticker is backwards",
                                }),
                              }),
                              className: "framer-1av5tci",
                              "data-framer-name": "The ticker is backwards",
                              fonts: ["CUSTOM;Cucciolo Rough Regular"],
                              name: "The ticker is backwards",
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  a("div", {
                    className: "framer-jtoams",
                    "data-framer-name": "Background-footer",
                    name: "Background-footer",
                    children: [
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fit",
                          loading: "lazy",
                          positionX: "center",
                          positionY: "center",
                          sizes: "1158px",
                          src: "/assets/img/bY5UGRaMWXyadM4li44qMLoCdMk.png",
                          srcSet:
                            "/assets/img/bY5UGRaMWXyadM4li44qMLoCdMk.png 512w, /assets/img/bY5UGRaMWXyadM4li44qMLoCdMk.png 1024w, /assets/img/bY5UGRaMWXyadM4li44qMLoCdMk.png 2048w, /assets/img/bY5UGRaMWXyadM4li44qMLoCdMk.png 3472w",
                        },
                        className: "framer-1ksmcsy",
                        "data-framer-name": "image 183",
                        name: "image 183",
                      }),
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fill",
                          loading: "lazy",
                          sizes: "860.7051px",
                          src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                          srcSet:
                            "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                        },
                        className: "framer-w524ap",
                        "data-framer-name": "image 186",
                        name: "image 186",
                        transformTemplate: w,
                      }),
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fill",
                          loading: "lazy",
                          sizes: "368.138px",
                          src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                          srcSet:
                            "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                        },
                        className: "framer-1xduazq",
                        "data-framer-name": "image 187",
                        name: "image 187",
                        transformTemplate: b,
                      }),
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fill",
                          loading: "lazy",
                          sizes: "368.138px",
                          src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                          srcSet:
                            "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                        },
                        className: "framer-1thd3av",
                        "data-framer-name": "image 188",
                        name: "image 188",
                        transformTemplate: k,
                      }),
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fill",
                          loading: "lazy",
                          sizes: "368.138px",
                          src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                          srcSet:
                            "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                        },
                        className: "framer-uebggr",
                        "data-framer-name": "image 266",
                        name: "image 266",
                        transformTemplate: Qe,
                      }),
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fill",
                          loading: "lazy",
                          sizes: "711.5848px",
                          src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                          srcSet:
                            "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                        },
                        className: "framer-p2uvu4",
                        "data-framer-name": "image 189",
                        name: "image 189",
                        transformTemplate: v,
                      }),
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fill",
                          loading: "lazy",
                          sizes: "548.4653px",
                          src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                          srcSet:
                            "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                        },
                        className: "framer-arorcn",
                        "data-framer-name": "image 190",
                        name: "image 190",
                        transformTemplate: C,
                      }),
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fit",
                          loading: "lazy",
                          positionX: "center",
                          positionY: "center",
                          sizes: "940px",
                          src: "/assets/img/Bn1bDFYW38QU2iJi2zygrj63s0.png",
                          srcSet:
                            "/assets/img/Bn1bDFYW38QU2iJi2zygrj63s0.png 512w, /assets/img/Bn1bDFYW38QU2iJi2zygrj63s0.png 1024w, /assets/img/Bn1bDFYW38QU2iJi2zygrj63s0.png 2048w, /assets/img/Bn1bDFYW38QU2iJi2zygrj63s0.png 3755w",
                        },
                        className: "framer-17kvtoo",
                        "data-framer-name": "image 265",
                        name: "image 265",
                      }),
                      e(n, {
                        background: {
                          alt: "",
                          fit: "fill",
                          loading: "lazy",
                          sizes: "410.162px",
                          src: "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png",
                          srcSet:
                            "/assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 512w, /assets/img/jwSDUBDG2g85ZVrJ9qcSQaQm84.png 1024w",
                        },
                        className: "framer-96xhzz",
                        "data-framer-name": "image 185",
                        name: "image 185",
                        transformTemplate: G,
                      }),
                    ],
                  }),
                  a("div", {
                    className: "framer-1niuwzg",
                    "data-framer-name": "Frame 1160444749",
                    name: "Frame 1160444749",
                    children: [
                      a("div", {
                        className: "framer-grtvx",
                        "data-framer-name": "Footer-menu",
                        name: "Footer-menu",
                        children: [
                          a("div", {
                            className: "framer-zqs6g9",
                            "data-framer-name": "Footer-menu",
                            name: "Footer-menu",
                            children: [
                              e(i, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                      "--framer-font-size": "62.98px",
                                      "--framer-letter-spacing": "0px",
                                    },
                                    children: e("span", {
                                      "data-text-fill": "true",
                                      style: {
                                        backgroundImage:
                                          "linear-gradient(rgb(255, 205, 40) 0%, rgb(250, 132, 3) 100%)",
                                      },
                                      children: "BUY",
                                    }),
                                  }),
                                }),
                                className: "framer-n3041n",
                                "data-framer-name": "BUY",
                                fonts: ["CUSTOM;Cucciolo Rough Regular"],
                                name: "BUY",
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              e(i, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                      "--framer-font-size": "62.98px",
                                      "--framer-letter-spacing": "0px",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children: e(f, {
                                      href: {
                                        hash: ":jKCkCmQLL",
                                        webPageId: "augiA20Il",
                                      },
                                      openInNewTab: !1,
                                      smoothScroll: !1,
                                      children: e("a", {
                                        className:
                                          "framer-styles-preset-1txdslu",
                                        "data-styles-preset": "a6BpdyeRp",
                                        children: "ABOUT",
                                      }),
                                    }),
                                  }),
                                }),
                                className: "framer-17fo09c",
                                "data-framer-name": "ABOUT",
                                fonts: ["CUSTOM;Cucciolo Rough Regular"],
                                name: "ABOUT",
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              e(i, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO0N1Y2Npb2xvIFJvdWdoIFJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"Cucciolo Rough Regular", "Cucciolo Rough Regular Placeholder", sans-serif',
                                      "--framer-font-size": "62.98px",
                                      "--framer-letter-spacing": "0px",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children: e(f, {
                                      href: {
                                        hash: ":MI9gUztjo",
                                        webPageId: "augiA20Il",
                                      },
                                      openInNewTab: !1,
                                      smoothScroll: !1,
                                      children: e("a", {
                                        className:
                                          "framer-styles-preset-1txdslu",
                                        "data-styles-preset": "a6BpdyeRp",
                                        children: "join",
                                      }),
                                    }),
                                  }),
                                }),
                                className: "framer-nra4r9",
                                "data-framer-name": "join",
                                fonts: ["CUSTOM;Cucciolo Rough Regular"],
                                name: "join",
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          a("div", {
                            className: "framer-5b5o0l",
                            children: [
                              e("div", {
                                className: "framer-1063i0b",
                                children: e(f, {
                                  href: "https://x.com/tacocat_ethx",
                                  openInNewTab: !0,
                                  children: e(p, {
                                    as: "a",
                                    className: "framer-10elx4 framer-lux5qc",
                                    "data-framer-name": "icon-twitter",
                                    layout: "position",
                                    name: "icon-twitter",
                                    opacity: 1,
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 53 53"><g><defs><linearGradient id="idss2009534023_1g1450211482" x1="0.49751243781094523" x2="0.5024875621890548" y1="0" y2="1"><stop offset="0" stop-color="rgb(255,205,40)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(250,132,3)" stop-opacity="1"></stop></linearGradient></defs><path d="M 30.031 23.376 L 44.158 7.648 L 40.81 7.648 L 28.544 21.304 L 18.747 7.648 L 7.447 7.648 L 22.262 28.299 L 7.447 44.791 L 10.795 44.791 L 23.748 30.37 L 34.094 44.791 L 45.395 44.791 Z M 25.446 28.48 L 23.944 26.424 L 12.001 10.062 L 17.143 10.062 L 26.781 23.267 L 28.282 25.323 L 40.811 42.487 L 35.67 42.487 Z" fill="url(#idss2009534023_1g1450211482)"></path></g></svg>',
                                    svgContentId: 2009534023,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                              e("div", {
                                className: "framer-e50ihp",
                                children: e(f, {
                                  href: "https://t.me/tacocat_portal",
                                  children: e(p, {
                                    as: "a",
                                    className: "framer-15kl5qc framer-lux5qc",
                                    "data-framer-name": "icon-telegram",
                                    layout: "position",
                                    name: "icon-telegram",
                                    opacity: 1,
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 53 53"><g transform="translate(0.42 0.22)" id="ss4054711509_1"><path d="M 0 52 L 0 0 L 52 0 L 52 52 Z" fill="transparent"></path><g><defs><linearGradient id="idss4054711509_3g1450211482" x1="0.49751243781094523" x2="0.5024875621890548" y1="0" y2="1"><stop offset="0" stop-color="rgb(255,205,40)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(250,132,3)" stop-opacity="1"></stop></linearGradient></defs><path d="M 42.853 9.599 C 43.388 9.373 43.974 9.296 44.55 9.374 C 45.126 9.452 45.67 9.683 46.126 10.042 C 46.582 10.402 46.934 10.877 47.144 11.419 C 47.354 11.961 47.415 12.549 47.321 13.122 L 42.407 42.929 C 41.93 45.804 38.775 47.453 36.138 46.02 C 33.933 44.822 30.657 42.976 27.71 41.05 C 26.237 40.086 21.724 36.998 22.278 34.801 C 22.755 32.923 30.338 25.864 34.672 21.667 C 36.372 20.018 35.597 19.067 33.588 20.584 C 28.601 24.349 20.593 30.076 17.945 31.688 C 15.609 33.109 14.392 33.352 12.936 33.109 C 10.279 32.667 7.816 31.983 5.805 31.148 C 3.088 30.022 3.22 26.286 5.803 25.199 Z" fill="url(#idss4054711509_3g1450211482)"></path></g></g></svg>',
                                    svgContentId: 4054711509,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e("div", {
                        className: "framer-1e5ajyr",
                        "data-framer-name": "Frame 1160444734",
                        name: "Frame 1160444734",
                        children: a("div", {
                          className: "framer-187h15t",
                          "data-framer-name": "Frame 1160444760",
                          name: "Frame 1160444760",
                          children: [
                            e(o, {
                              breakpoint: t,
                              overrides: {
                                tiAv0zJqn: {
                                  children: e(r, {
                                    children: a("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO0NvbWljIFNhbnMgTVMgQm9sZA==",
                                        "--framer-font-family":
                                          '"Comic Sans MS Bold", "Comic Sans MS Bold Placeholder", sans-serif',
                                        "--framer-font-size": "20px",
                                        "--framer-letter-spacing": "0.02em",
                                      },
                                      children: [
                                        e("span", {
                                          style: {
                                            "--framer-text-transform":
                                              "uppercase",
                                          },
                                          children: "$tacocat",
                                        }),
                                        " \xA9 All rights reserved",
                                      ],
                                    }),
                                  }),
                                  transformTemplate: l,
                                },
                              },
                              children: e(i, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                  children: a("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO0NvbWljIFNhbnMgTVMgQm9sZA==",
                                      "--framer-font-family":
                                        '"Comic Sans MS Bold", "Comic Sans MS Bold Placeholder", sans-serif',
                                      "--framer-font-size": "26.68px",
                                      "--framer-letter-spacing": "0.02em",
                                    },
                                    children: [
                                      e("span", {
                                        style: {
                                          "--framer-text-transform":
                                            "uppercase",
                                        },
                                        children: "$tacocat",
                                      }),
                                      " \xA9 All rights reserved",
                                    ],
                                  }),
                                }),
                                className: "framer-frhx5q",
                                "data-framer-name":
                                  "$tacocat \xA9 All rights reserved",
                                fonts: ["CUSTOM;Comic Sans MS Bold"],
                                name: "$tacocat \xA9 All rights reserved",
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                            e(o, {
                              breakpoint: t,
                              overrides: {
                                tiAv0zJqn: {
                                  children: e(r, {
                                    children: a("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO0NvbWljIFNhbnMgTVMgQm9sZA==",
                                        "--framer-font-family":
                                          '"Comic Sans MS Bold", "Comic Sans MS Bold Placeholder", sans-serif',
                                        "--framer-font-size": "20px",
                                        "--framer-letter-spacing": "0.02em",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children: [
                                        e("span", {
                                          style: {
                                            "--framer-text-transform":
                                              "uppercase",
                                          },
                                          children: "$tacocat",
                                        }),
                                        " \xA9 All rights reserved",
                                      ],
                                    }),
                                  }),
                                  transformTemplate: l,
                                },
                              },
                              children: e(i, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                  children: a("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO0NvbWljIFNhbnMgTVMgQm9sZA==",
                                      "--framer-font-family":
                                        '"Comic Sans MS Bold", "Comic Sans MS Bold Placeholder", sans-serif',
                                      "--framer-font-size": "26.68px",
                                      "--framer-letter-spacing": "0.02em",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children: [
                                      e("span", {
                                        style: {
                                          "--framer-text-transform":
                                            "uppercase",
                                        },
                                        children: "$tacocat",
                                      }),
                                      " \xA9 All rights reserved",
                                    ],
                                  }),
                                }),
                                className: "framer-139lmh6",
                                "data-framer-name":
                                  "$tacocat \xA9 All rights reserved",
                                fonts: ["CUSTOM;Comic Sans MS Bold"],
                                name: "$tacocat \xA9 All rights reserved",
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e("div", { className: T(re, ...E), id: "overlay" }),
        ],
      }),
    });
  }),
  Me = [
    '.framer-8oykG[data-border="true"]::after, .framer-8oykG [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${q.bodyClassName}-framer-8oykG { background: rgb(14, 14, 14); }`,
    ".framer-8oykG.framer-lux5qc, .framer-8oykG .framer-lux5qc { display: block; }",
    ".framer-8oykG.framer-72rtr7 { align-content: center; align-items: center; background-color: #0e0e0e; display: flex; flex-direction: column; flex-wrap: wrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1440px; }",
    ".framer-8oykG .framer-1s7mdj1 { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #0d0d0d; border-bottom-left-radius: 48px; border-bottom-right-radius: 48px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 100px; height: auto; justify-content: center; left: 50%; overflow: visible; padding: 24px 24px 24px 24px; position: fixed; top: -4px; transform: translateX(-50%); width: auto; z-index: 10; }",
    ".framer-8oykG .framer-ixz0en { border-bottom-left-radius: 200px; border-bottom-right-radius: 200px; flex: none; height: 64px; overflow: visible; position: relative; width: 92px; }",
    ".framer-8oykG .framer-mibkv0 { aspect-ratio: 1 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 80px); left: 7px; position: absolute; width: 80px; }",
    ".framer-8oykG .framer-1s2ffgv { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 749px; border-bottom-right-radius: 749px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 69px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-8oykG .framer-1mygvx, .framer-8oykG .framer-1ekbntx, .framer-8oykG .framer-fyu7hv, .framer-8oykG .framer-b0w4n2, .framer-8oykG .framer-zoqncp, .framer-8oykG .framer-xd2y8u, .framer-8oykG .framer-nxmzz4, .framer-8oykG .framer-2wo48s, .framer-8oykG .framer-rggg3t, .framer-8oykG .framer-1cdhzrq, .framer-8oykG .framer-uhm8iz, .framer-8oykG .framer-1pcspp9, .framer-8oykG .framer-1av5tci, .framer-8oykG .framer-n3041n, .framer-8oykG .framer-17fo09c, .framer-8oykG .framer-nra4r9 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-8oykG .framer-r1fcjk { --border-bottom-width: 3px; --border-color: #c75300; --border-left-width: 3px; --border-right-width: 3px; --border-style: solid; --border-top-width: 3px; background: linear-gradient(180deg, #ffcd28 0%, rgba(250, 132, 3, 1) 100%); border-bottom-left-radius: 64px; border-bottom-right-radius: 64px; border-top-left-radius: 64px; border-top-right-radius: 64px; box-shadow: 3px 3.75px 0px 0px #c75300; flex: none; height: 60px; overflow: visible; position: relative; width: 215px; }",
    ".framer-8oykG .framer-teuihw { flex: none; height: 24px; left: 17px; overflow: visible; position: absolute; top: 18px; width: 181px; }",
    ".framer-8oykG .framer-14pw8m1 { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 50%; position: absolute; top: 0px; transform: translateX(-50%); white-space: pre; width: auto; }",
    ".framer-8oykG .framer-1bnmktd { flex: none; height: 110.00000000000001vh; min-height: 1000px; overflow: visible; position: relative; width: 100%; }",
    ".framer-8oykG .framer-1flcfkg { -webkit-filter: blur(150px); background: linear-gradient(180deg, #ffcd28 0%, rgba(250, 132, 3, 1) 100%); border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; filter: blur(150px); flex: none; height: 441px; left: calc(47.22222222222224% - 787px / 2); opacity: 0.4; position: absolute; top: calc(46.50000000000002% - 441px / 2); width: 787px; }",
    ".framer-8oykG .framer-1pc3482 { flex: none; height: 735px; overflow: visible; position: absolute; right: -100px; top: calc(46.36363636363639% - 734.6795043945312px / 2); width: 591px; }",
    ".framer-8oykG .framer-1gfuw1t { aspect-ratio: 1.3338751957334527 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 167px); left: 220px; position: absolute; top: 227px; transform: rotate(-152deg); width: 222px; }",
    ".framer-8oykG .framer-15t0xdz { aspect-ratio: 1.4149849140876674 / 1; bottom: 123px; flex: none; height: var(--framer-aspect-ratio-supported, 104px); left: 23px; position: absolute; transform: rotate(-143deg); width: 147px; }",
    ".framer-8oykG .framer-q6k7bu { flex: none; height: 104px; left: 147px; position: absolute; top: 108px; width: 136px; }",
    ".framer-8oykG .framer-v6p2to { flex: none; height: 512px; left: -113px; overflow: visible; position: absolute; top: calc(45.00000000000002% - 512.338134765625px / 2); width: 434px; }",
    ".framer-8oykG .framer-syh54p { aspect-ratio: 1.3584004687927873 / 1; bottom: 120px; flex: none; height: var(--framer-aspect-ratio-supported, 112px); position: absolute; right: -35px; transform: rotate(46deg); width: 153px; }",
    ".framer-8oykG .framer-x2w8et { flex: none; height: 182px; left: 127px; position: absolute; top: 11px; width: 238px; }",
    ".framer-8oykG .framer-12ljdh9 { aspect-ratio: 1.4149852083016017 / 1; bottom: 28px; flex: none; height: var(--framer-aspect-ratio-supported, 114px); left: 65px; position: absolute; transform: rotate(54deg); width: 161px; }",
    ".framer-8oykG .framer-1msret4 { align-content: flex-start; align-items: flex-start; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; left: 0px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; right: 0px; scroll-margin-top: 150px; }",
    ".framer-8oykG .framer-1gunudb, .framer-8oykG .framer-1gihvgu, .framer-8oykG .framer-88sof7, .framer-8oykG .framer-wzmmig, .framer-8oykG .framer-bgcgpq, .framer-8oykG .framer-id36f7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-8oykG .framer-1bs22po, .framer-8oykG .framer-1reuwsd, .framer-8oykG .framer-1ldcor2, .framer-8oykG .framer-143lp6p, .framer-8oykG .framer-5crfg5, .framer-8oykG .framer-aretcy { flex: none; height: 100px; overflow: hidden; position: relative; width: 100px; }",
    ".framer-8oykG .framer-1aeub9g, .framer-8oykG .framer-z1fuy7, .framer-8oykG .framer-gl07ry, .framer-8oykG .framer-xiqvgm, .framer-8oykG .framer-1nsb46j, .framer-8oykG .framer-14olldn, .framer-8oykG .framer-px023, .framer-8oykG .framer-tvccrt { flex: none; height: 100px; left: -8px; overflow: visible; position: absolute; top: 0px; transform: rotate(-8deg); width: 118px; }",
    ".framer-8oykG .framer-sgxhx2, .framer-8oykG .framer-vm06p0, .framer-8oykG .framer-452286, .framer-8oykG .framer-1uon6dw, .framer-8oykG .framer-cwt2gw, .framer-8oykG .framer-5kr8wd { flex: none; height: 101px; left: 17px; position: absolute; top: 0px; width: 101px; }",
    ".framer-8oykG .framer-u0gky8, .framer-8oykG .framer-xqw56i, .framer-8oykG .framer-fatocu, .framer-8oykG .framer-1v13bt9, .framer-8oykG .framer-1ahczeu, .framer-8oykG .framer-qqk9eh { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 5px; position: absolute; top: 38px; transform: rotate(-104deg); white-space: pre; width: auto; }",
    ".framer-8oykG .framer-wlz62q { bottom: 0px; flex: none; opacity: 0.1; overflow: visible; position: absolute; right: 0px; top: 0px; width: 1437px; }",
    ".framer-8oykG .framer-19c5ujj, .framer-8oykG .framer-khhp6q, .framer-8oykG .framer-19z5g9 { flex: none; height: 944px; left: -595px; position: absolute; top: 185px; width: 1028px; }",
    ".framer-8oykG .framer-sqfsne, .framer-8oykG .framer-x9igyy, .framer-8oykG .framer-1uh86q2 { aspect-ratio: 2.0599754897847227 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 371px); left: 835px; opacity: 0.8; position: absolute; top: 448px; transform: rotate(150deg); width: 764px; }",
    ".framer-8oykG .framer-1w5vy1, .framer-8oykG .framer-123y0hj, .framer-8oykG .framer-1vckngv { aspect-ratio: 2.0599753523314397 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 159px); left: 1057px; opacity: 0.8; position: absolute; top: 198px; transform: rotate(-120deg); width: 327px; }",
    ".framer-8oykG .framer-f3194j, .framer-8oykG .framer-l0786b, .framer-8oykG .framer-1kpkwfu { aspect-ratio: 2.0599753523314397 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 159px); left: 949px; opacity: 0.8; position: absolute; top: 306px; transform: rotate(-41deg); width: 327px; }",
    ".framer-8oykG .framer-13w7dx1, .framer-8oykG .framer-c3lp9q, .framer-8oykG .framer-1tqycji { aspect-ratio: 2.0599756434590906 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 307px); left: 404px; opacity: 0.8; position: absolute; top: 399px; transform: rotate(-165deg); width: 632px; }",
    ".framer-8oykG .framer-go2n8w, .framer-8oykG .framer-8ieo2, .framer-8oykG .framer-1ot0367 { aspect-ratio: 2.031633735444176 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 240px); left: 1093px; opacity: 0.8; position: absolute; top: -23px; transform: rotate(-179deg); width: 487px; }",
    ".framer-8oykG .framer-q1fquu, .framer-8oykG .framer-1kpqwp7, .framer-8oykG .framer-1lihght { flex: none; height: 570px; left: 255px; position: absolute; top: -201px; width: 835px; }",
    ".framer-8oykG .framer-ahemwu, .framer-8oykG .framer-rake34, .framer-8oykG .framer-ou5udj { aspect-ratio: 2.0599756505753986 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 177px); left: 1348px; opacity: 0.8; position: absolute; top: 124px; transform: rotate(122deg); width: 364px; }",
    ".framer-8oykG .framer-1g7gw5j { bottom: 10px; flex: none; height: 370px; position: absolute; right: -96px; width: 405px; }",
    ".framer-8oykG .framer-kjzddj { bottom: -323px; flex: none; height: 794px; left: -217px; overflow: visible; position: absolute; width: 635px; z-index: 1; }",
    ".framer-8oykG .framer-1mgud0 { aspect-ratio: 0.6430100716056937 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 598px); left: 55px; position: absolute; top: 164px; transform: rotate(-169deg); width: 384px; }",
    ".framer-8oykG .framer-hynorz { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 332px); left: 266px; position: absolute; top: 37px; transform: rotate(15deg); width: 332px; }",
    ".framer-8oykG .framer-72uwxk { flex: none; height: 530px; left: calc(50.00000000000002% - 900px / 2); overflow: visible; position: absolute; top: calc(50.300000000000026% - 530px / 2); width: 900px; }",
    ".framer-8oykG .framer-15ma99s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 2px; transform: translateX(-50%); width: min-content; }",
    ".framer-8oykG .framer-1ois7t0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 44px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-8oykG .framer-14ww23f, .framer-8oykG .framer-jfuo16 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-8oykG .framer-a5qsh4 { align-self: stretch; flex: none; height: 181px; overflow: visible; position: relative; width: auto; }",
    ".framer-8oykG .framer-p6qr63, .framer-8oykG .framer-1ktwl9 { --framer-paragraph-spacing: 0px; bottom: -45px; flex: none; height: auto; left: 51%; position: absolute; transform: translateX(-50%); white-space: pre; width: auto; }",
    ".framer-8oykG .framer-1e65ng4 { --framer-paragraph-spacing: 0px; bottom: -40px; flex: none; height: auto; left: 50%; position: absolute; transform: translateX(-50%); white-space: pre; width: auto; }",
    ".framer-8oykG .framer-aq01w9 { flex: none; height: 190px; overflow: visible; position: relative; width: 1012px; }",
    ".framer-8oykG .framer-cz5wip { --framer-paragraph-spacing: 0px; bottom: -34px; flex: none; height: auto; left: 50%; position: absolute; transform: translateX(-50%); white-space: pre; width: auto; }",
    ".framer-8oykG .framer-1gxgyus { --framer-paragraph-spacing: 0px; bottom: -30px; flex: none; height: auto; left: 49%; position: absolute; transform: translateX(-50%); white-space: pre; width: auto; }",
    ".framer-8oykG .framer-s9sz6t { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 52px; justify-content: center; left: 50%; overflow: hidden; padding: 0px 0px 0px 0px; position: absolute; transform: translateX(-50%); width: auto; }",
    ".framer-8oykG .framer-1prlff0, .framer-8oykG .framer-1s5swm7, .framer-8oykG .framer-1063i0b, .framer-8oykG .framer-e50ihp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-8oykG .framer-12x5v4u, .framer-8oykG .framer-15dwae0, .framer-8oykG .framer-10elx4, .framer-8oykG .framer-15kl5qc { flex: none; height: 53px; position: relative; text-decoration: none; width: 53px; }",
    ".framer-8oykG .framer-1ch9a5m { align-content: center; align-items: center; background-color: #0e0e0e; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; min-height: 900px; overflow: visible; padding: 48px 0px 92px 0px; position: relative; width: 100%; }",
    ".framer-8oykG .framer-1d4lecu { flex: none; height: 752px; left: calc(50.00000000000002% - 996px / 2); position: absolute; top: calc(50.00000000000002% - 752px / 2); width: 996px; z-index: 0; }",
    ".framer-8oykG .framer-3m434p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-8oykG .framer-12e2j5t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-8oykG .framer-a0jkp2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-8oykG .framer-64vkyv { flex: none; height: 118px; overflow: visible; position: relative; width: 988px; }",
    ".framer-8oykG .framer-yb9pem { --framer-paragraph-spacing: 0px; bottom: 0px; flex: none; left: -6px; position: absolute; right: -6px; top: 0px; white-space: pre-wrap; word-break: break-word; word-wrap: break-word; }",
    ".framer-8oykG .framer-1cxnm0 { flex: none; height: 198px; overflow: visible; position: relative; width: 1005px; }",
    ".framer-8oykG .framer-o1qqnv { --framer-paragraph-spacing: 0px; bottom: -35px; flex: none; height: auto; left: 0px; position: absolute; white-space: pre-wrap; width: 1004px; word-break: break-word; word-wrap: break-word; }",
    ".framer-8oykG .framer-57bexm { --framer-paragraph-spacing: 0px; bottom: -29px; flex: none; height: auto; position: absolute; right: 0px; white-space: pre-wrap; width: 1004px; word-break: break-word; word-wrap: break-word; }",
    ".framer-8oykG .framer-1fkqiqr { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 900px; word-break: break-word; word-wrap: break-word; }",
    ".framer-8oykG .framer-1s38txq { flex: none; height: 800px; left: calc(50.00000000000002% - 1437px / 2); opacity: 0.09; overflow: visible; position: absolute; top: calc(50.00000000000002% - 800px / 2); width: 1437px; z-index: 1; }",
    ".framer-8oykG .framer-udyxh6 { -webkit-filter: blur(145.72984313964844px); background: linear-gradient(180deg, #ffcd28 0%, rgba(250, 132, 3, 1) 100%); border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; filter: blur(145.72984313964844px); flex: none; height: 311px; left: calc(50.00000000000002% - 993px / 2); opacity: 0.4; position: absolute; top: calc(50.00000000000002% - 311px / 2); width: 993px; z-index: 1; }",
    ".framer-8oykG .framer-r5sgei { aspect-ratio: 1 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 409px); left: -79px; position: absolute; width: 409px; z-index: 1; }",
    ".framer-8oykG .framer-1500fe1 { aspect-ratio: 1 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 373px); position: absolute; right: -70px; width: 373px; z-index: 1; }",
    ".framer-8oykG .framer-35zupt { background-color: #0d0d0d; flex: none; height: 923px; overflow: visible; position: relative; width: 100%; }",
    ".framer-8oykG .framer-10pjkfe { bottom: -101px; flex: none; height: 1024px; left: calc(50.00000000000002% - 1437px / 2); opacity: 0.09; overflow: visible; position: absolute; width: 1437px; }",
    ".framer-8oykG .framer-19uar6f { -webkit-filter: blur(145.72984313964844px); background: linear-gradient(180deg, #ffcd28 0%, rgba(250, 132, 3, 1) 100%); border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; bottom: 87px; filter: blur(145.72984313964844px); flex: none; height: 586px; left: calc(49.93055555555558% - 1134px / 2); opacity: 0.4; position: absolute; width: 1134px; }",
    ".framer-8oykG .framer-1bde7r5 { align-content: center; align-items: center; bottom: 88px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; transform: translateX(-50%); width: min-content; }",
    ".framer-8oykG .framer-1l2gser, .framer-8oykG .framer-1rhbmif, .framer-8oykG .framer-19h00co { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-8oykG .framer-u46j7a { align-content: flex-start; align-items: flex-start; background-color: #ff7272; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 24px 24px 24px 24px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-8oykG .framer-1ntl0ni { bottom: -88px; flex: none; left: -176px; overflow: visible; position: absolute; right: -116px; top: -26px; z-index: 1; }",
    ".framer-8oykG .framer-735cos { background-color: rgba(114, 0, 0, 0.54); border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 128px; left: 659px; position: absolute; top: 187px; width: 128px; }",
    ".framer-8oykG .framer-iu0a6k { background-color: #812a2a; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 59px; left: 233px; position: absolute; top: 0px; width: 59px; }",
    ".framer-8oykG .framer-1epd2l6, .framer-8oykG .framer-rbvsd6 { background-color: #721b00; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 29px; left: 102px; position: absolute; top: 226px; width: 29px; }",
    ".framer-8oykG .framer-1q38h9h, .framer-8oykG .framer-wniebb { background-color: #721b00; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 19px; left: 0px; position: absolute; top: 347px; width: 19px; }",
    ".framer-8oykG .framer-19ex9bp { background-color: #812a2a; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 8px; left: 299px; position: absolute; top: 245px; width: 8px; }",
    ".framer-8oykG .framer-1arip06 { background-color: #812a2a; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 8px; left: 409px; position: absolute; top: 127px; width: 8px; }",
    ".framer-8oykG .framer-9q3xb9 { background-color: #812a2a; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 8px; left: 469px; position: absolute; top: 204px; width: 8px; }",
    ".framer-8oykG .framer-3q73pv { background-color: #812a2a; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 15px; left: 300px; position: absolute; top: 179px; width: 15px; }",
    ".framer-8oykG .framer-1iincja { background-color: #812a2a; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 25px; left: 621px; position: absolute; top: 13px; width: 25px; }",
    ".framer-8oykG .framer-1pklv3w, .framer-8oykG .framer-hn8skh { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-8oykG .framer-1uon8ec, .framer-8oykG .framer-1yexj4a { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 447px; word-break: break-word; word-wrap: break-word; }",
    ".framer-8oykG .framer-1segjuc { flex: none; height: 45px; position: relative; width: 253px; }",
    ".framer-8oykG .framer-1scd9aq { align-content: flex-start; align-items: flex-start; background-color: #ffd100; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 24px 24px 24px 24px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-8oykG .framer-1gvchdw { bottom: -48px; flex: none; left: -300px; overflow: visible; position: absolute; right: 0px; top: -13px; z-index: 1; }",
    ".framer-8oykG .framer-xb5gn { background-color: rgba(114, 6, 0, 0.15); border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 128px; left: 353px; position: absolute; top: 229px; width: 128px; }",
    ".framer-8oykG .framer-1hx6m5h { background-color: #b35a34; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 59px; left: 233px; position: absolute; top: 0px; width: 59px; }",
    ".framer-8oykG .framer-15wp73b { background-color: #724400; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 29px; left: 102px; position: absolute; top: 226px; width: 29px; }",
    ".framer-8oykG .framer-yr6wa0 { background-color: #724400; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 19px; left: 0px; position: absolute; top: 347px; width: 19px; }",
    ".framer-8oykG .framer-1utb6hy { background-color: #b35a34; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 8px; left: 299px; position: absolute; top: 245px; width: 8px; }",
    ".framer-8oykG .framer-10jvimi { background-color: #b35a34; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 8px; left: 409px; position: absolute; top: 127px; width: 8px; }",
    ".framer-8oykG .framer-s017ya { background-color: #b35a34; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 8px; left: 708px; position: absolute; top: 293px; width: 8px; }",
    ".framer-8oykG .framer-19york1 { background-color: #b35a34; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 8px; left: 469px; position: absolute; top: 204px; width: 8px; }",
    ".framer-8oykG .framer-1ck2iqt { background-color: #b35a34; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 15px; left: 300px; position: absolute; top: 179px; width: 15px; }",
    ".framer-8oykG .framer-3krd80 { background-color: #dab964; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 25px; left: 621px; position: absolute; top: 13px; width: 25px; }",
    ".framer-8oykG .framer-1tucigr { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 247px; word-break: break-word; word-wrap: break-word; }",
    ".framer-8oykG .framer-orfmtr { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 367px; word-break: break-word; word-wrap: break-word; }",
    ".framer-8oykG .framer-1tkpx63 { flex: none; height: 45px; position: relative; width: 115px; }",
    ".framer-8oykG .framer-mfdp0l { align-content: flex-start; align-items: flex-start; background-color: #ffa572; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 32px 24px 32px 24px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-8oykG .framer-8qyib { bottom: -92px; flex: none; height: 395px; left: calc(48.513902205177395% - 849px / 2); overflow: visible; position: absolute; width: 849px; z-index: 1; }",
    ".framer-8oykG .framer-1dv0ekp { background-color: rgba(114, 0, 0, 0.54); border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 128px; left: 532px; position: absolute; top: 267px; width: 128px; }",
    ".framer-8oykG .framer-15qgqr0 { background-color: #b36234; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 59px; left: 169px; position: absolute; top: 0px; width: 59px; }",
    ".framer-8oykG .framer-d60azw { background-color: #b36234; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 59px; left: 790px; position: absolute; top: 145px; width: 59px; }",
    ".framer-8oykG .framer-1vihsje { background-color: #b36234; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 8px; left: 299px; position: absolute; top: 245px; width: 8px; }",
    ".framer-8oykG .framer-1b297ey { background-color: #b36234; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 8px; left: 409px; position: absolute; top: 127px; width: 8px; }",
    ".framer-8oykG .framer-8glzik { background-color: #b36234; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 8px; left: 469px; position: absolute; top: 204px; width: 8px; }",
    ".framer-8oykG .framer-1yr3p61 { background-color: #b36234; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 15px; left: 190px; position: absolute; top: 182px; width: 15px; }",
    ".framer-8oykG .framer-1d5afmi { background-color: #b36234; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: 25px; left: 621px; position: absolute; top: 13px; width: 25px; }",
    ".framer-8oykG .framer-k87eq4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-8oykG .framer-2vb1jb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-8oykG .framer-1ls4pg7 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 474px; word-break: break-word; word-wrap: break-word; }",
    ".framer-8oykG .framer-h6zoha { flex: none; height: 46px; position: relative; width: 253px; }",
    ".framer-8oykG .framer-1lpnx2r { flex: none; height: 135px; left: calc(50.62500000000002% - 737px / 2); overflow: visible; position: absolute; top: 64px; width: 737px; }",
    ".framer-8oykG .framer-1o6sh19 { --framer-paragraph-spacing: 0px; flex: none; height: 99px; position: absolute; right: -24px; top: 1px; white-space: pre-wrap; width: 753px; word-break: break-word; word-wrap: break-word; }",
    ".framer-8oykG .framer-1rdopi8 { --framer-paragraph-spacing: 0px; flex: none; height: 99px; left: 0px; position: absolute; right: -16px; top: 0px; white-space: pre-wrap; word-break: break-word; word-wrap: break-word; }",
    ".framer-8oykG .framer-1dt7u6m { flex: none; height: 632px; overflow: visible; position: relative; width: 100%; }",
    ".framer-8oykG .framer-17ht1ue { -webkit-filter: blur(136.05381774902344px); background: linear-gradient(180deg, #ffcd28 0%, rgba(250, 132, 3, 1) 100%); border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; filter: blur(136.05381774902344px); flex: none; height: 368px; left: calc(50.694444444444464% - 1036px / 2); opacity: 0.4; position: absolute; top: 100px; width: 1036px; }",
    ".framer-8oykG .framer-115ho2v { flex: none; height: 755px; left: -177px; overflow: visible; position: absolute; right: -9px; top: -203px; }",
    ".framer-8oykG .framer-1a7lbld { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 368px); left: 44px; position: absolute; top: 298px; transform: rotate(-16deg); width: 368px; }",
    ".framer-8oykG .framer-qwcgqa { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 219px); left: 612px; position: absolute; top: 150px; transform: rotate(-17deg); width: 219px; }",
    ".framer-8oykG .framer-12f5gch { flex: none; height: 468px; left: 1158px; position: absolute; top: 1px; width: 468px; }",
    ".framer-8oykG .framer-jglsce { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 238px); left: 1302px; position: absolute; top: 488px; transform: rotate(-7deg); width: 238px; }",
    ".framer-8oykG .framer-ueqi0f { flex: none; height: 250px; left: 424px; position: absolute; top: 505px; width: 250px; }",
    ".framer-8oykG .framer-1jb0hua { bottom: 160px; flex: none; height: 274px; left: 381px; overflow: visible; position: absolute; width: 1072px; }",
    ".framer-8oykG .framer-16iu5dg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; right: -9px; top: 50%; transform: translateY(-50%); width: min-content; }",
    ".framer-8oykG .framer-1tqpp1w, .framer-8oykG .framer-3g1dvv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-8oykG .framer-bqgahx { --framer-paragraph-spacing: 0px; flex: none; height: 132px; position: relative; white-space: pre-wrap; width: 476px; word-break: break-word; word-wrap: break-word; }",
    ".framer-8oykG .framer-1dkmger, .framer-8oykG .framer-18xsfsu { --framer-paragraph-spacing: 0px; flex: none; height: 98px; position: relative; white-space: pre-wrap; width: 564px; word-break: break-word; word-wrap: break-word; }",
    ".framer-8oykG .framer-1wvihv4 { --framer-paragraph-spacing: 0px; flex: none; height: 127px; position: relative; white-space: pre-wrap; width: 688px; word-break: break-word; word-wrap: break-word; }",
    ".framer-8oykG .framer-1u34e0m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 0px; width: min-content; }",
    ".framer-8oykG .framer-xxv9st { --framer-paragraph-spacing: 0px; flex: none; height: 133px; position: relative; white-space: pre-wrap; width: 478px; word-break: break-word; word-wrap: break-word; }",
    ".framer-8oykG .framer-urz4wz { --framer-paragraph-spacing: 0px; flex: none; height: 127px; position: relative; white-space: pre-wrap; width: 700px; word-break: break-word; word-wrap: break-word; }",
    ".framer-8oykG .framer-1xn8ik { flex: none; height: 599px; overflow: visible; position: relative; width: 100%; }",
    ".framer-8oykG .framer-tier9f { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; left: 0px; overflow: hidden; padding: 0px 0px 0px 0px; position: absolute; right: 0px; top: 0px; }",
    ".framer-8oykG .framer-5puitw, .framer-8oykG .framer-tuiu41 { flex: none; height: 39px; left: 22px; position: absolute; top: 5px; width: 39px; }",
    ".framer-8oykG .framer-1gmqp5o, .framer-8oykG .framer-1urfeku { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 18px; position: absolute; top: 20px; transform: rotate(-104deg); white-space: pre; width: auto; }",
    ".framer-8oykG .framer-jtoams { flex: none; height: 567px; left: 0px; opacity: 0.1; overflow: hidden; position: absolute; right: 0px; top: -10px; }",
    ".framer-8oykG .framer-1ksmcsy { flex: none; height: 1064px; left: -798px; position: absolute; top: 290px; width: 1158px; }",
    ".framer-8oykG .framer-w524ap { aspect-ratio: 2.0599756544740857 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 418px); left: 813px; opacity: 0.8; position: absolute; top: 588px; transform: rotate(150deg); width: 861px; }",
    ".framer-8oykG .framer-1xduazq { aspect-ratio: 2.0599752406370495 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 179px); left: 1064px; opacity: 0.8; position: absolute; top: 306px; transform: rotate(-120deg); width: 368px; }",
    ".framer-8oykG .framer-1thd3av { aspect-ratio: 2.0599752406370495 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 179px); left: 942px; opacity: 0.8; position: absolute; top: 427px; transform: rotate(-41deg); width: 368px; }",
    ".framer-8oykG .framer-uebggr { aspect-ratio: 2.0599752406370495 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 179px); left: 1621px; opacity: 0.8; position: absolute; top: 98px; transform: rotate(78deg); width: 368px; }",
    ".framer-8oykG .framer-p2uvu4 { aspect-ratio: 2.0599756042161754 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 345px); left: 328px; opacity: 0.8; position: absolute; top: 532px; transform: rotate(-165deg); width: 712px; }",
    ".framer-8oykG .framer-arorcn { aspect-ratio: 2.0316334617848533 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 270px); left: 1104px; opacity: 0.8; position: absolute; top: 57px; transform: rotate(-179deg); width: 548px; }",
    ".framer-8oykG .framer-17kvtoo { flex: none; height: 642px; left: 160px; position: absolute; top: -144px; width: 940px; }",
    ".framer-8oykG .framer-96xhzz { aspect-ratio: 2.0599757174580717 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 199px); left: 1390px; opacity: 0.8; position: absolute; top: 222px; transform: rotate(122deg); width: 410px; }",
    ".framer-8oykG .framer-1niuwzg { align-content: flex-end; align-items: flex-end; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; transform: translateX(-50%); width: min-content; }",
    ".framer-8oykG .framer-grtvx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-8oykG .framer-zqs6g9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 35px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-8oykG .framer-5b5o0l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 52px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: auto; }",
    ".framer-8oykG .framer-1e5ajyr { align-content: flex-end; align-items: flex-end; background: linear-gradient(180deg, #ffcd28 0%, rgba(250, 132, 3, 1) 100%); border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 16px 320px 16px 320px; position: relative; width: min-content; }",
    ".framer-8oykG .framer-187h15t { flex: none; height: 39px; overflow: visible; position: relative; width: 455px; }",
    ".framer-8oykG .framer-frhx5q { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 1px; position: absolute; top: 2px; white-space: pre; width: auto; }",
    ".framer-8oykG .framer-139lmh6 { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 0px; position: absolute; top: 0px; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-8oykG.framer-72rtr7, .framer-8oykG .framer-1s7mdj1, .framer-8oykG .framer-1s2ffgv, .framer-8oykG .framer-1msret4, .framer-8oykG .framer-1gunudb, .framer-8oykG .framer-1gihvgu, .framer-8oykG .framer-88sof7, .framer-8oykG .framer-15ma99s, .framer-8oykG .framer-1ois7t0, .framer-8oykG .framer-14ww23f, .framer-8oykG .framer-jfuo16, .framer-8oykG .framer-s9sz6t, .framer-8oykG .framer-1prlff0, .framer-8oykG .framer-1s5swm7, .framer-8oykG .framer-1ch9a5m, .framer-8oykG .framer-3m434p, .framer-8oykG .framer-12e2j5t, .framer-8oykG .framer-a0jkp2, .framer-8oykG .framer-1bde7r5, .framer-8oykG .framer-1l2gser, .framer-8oykG .framer-u46j7a, .framer-8oykG .framer-1rhbmif, .framer-8oykG .framer-1pklv3w, .framer-8oykG .framer-1scd9aq, .framer-8oykG .framer-19h00co, .framer-8oykG .framer-hn8skh, .framer-8oykG .framer-mfdp0l, .framer-8oykG .framer-k87eq4, .framer-8oykG .framer-2vb1jb, .framer-8oykG .framer-16iu5dg, .framer-8oykG .framer-1tqpp1w, .framer-8oykG .framer-1u34e0m, .framer-8oykG .framer-3g1dvv, .framer-8oykG .framer-tier9f, .framer-8oykG .framer-wzmmig, .framer-8oykG .framer-bgcgpq, .framer-8oykG .framer-id36f7, .framer-8oykG .framer-1niuwzg, .framer-8oykG .framer-zqs6g9, .framer-8oykG .framer-5b5o0l, .framer-8oykG .framer-1063i0b, .framer-8oykG .framer-e50ihp, .framer-8oykG .framer-1e5ajyr { gap: 0px; } .framer-8oykG.framer-72rtr7 > *, .framer-8oykG .framer-14ww23f > *, .framer-8oykG .framer-jfuo16 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-8oykG.framer-72rtr7 > :first-child, .framer-8oykG .framer-15ma99s > :first-child, .framer-8oykG .framer-14ww23f > :first-child, .framer-8oykG .framer-jfuo16 > :first-child, .framer-8oykG .framer-3m434p > :first-child, .framer-8oykG .framer-12e2j5t > :first-child, .framer-8oykG .framer-a0jkp2 > :first-child, .framer-8oykG .framer-1l2gser > :first-child, .framer-8oykG .framer-u46j7a > :first-child, .framer-8oykG .framer-1rhbmif > :first-child, .framer-8oykG .framer-1pklv3w > :first-child, .framer-8oykG .framer-1scd9aq > :first-child, .framer-8oykG .framer-19h00co > :first-child, .framer-8oykG .framer-hn8skh > :first-child, .framer-8oykG .framer-mfdp0l > :first-child, .framer-8oykG .framer-k87eq4 > :first-child, .framer-8oykG .framer-2vb1jb > :first-child, .framer-8oykG .framer-16iu5dg > :first-child, .framer-8oykG .framer-1u34e0m > :first-child, .framer-8oykG .framer-1niuwzg > :first-child, .framer-8oykG .framer-zqs6g9 > :first-child { margin-top: 0px; } .framer-8oykG.framer-72rtr7 > :last-child, .framer-8oykG .framer-15ma99s > :last-child, .framer-8oykG .framer-14ww23f > :last-child, .framer-8oykG .framer-jfuo16 > :last-child, .framer-8oykG .framer-3m434p > :last-child, .framer-8oykG .framer-12e2j5t > :last-child, .framer-8oykG .framer-a0jkp2 > :last-child, .framer-8oykG .framer-1l2gser > :last-child, .framer-8oykG .framer-u46j7a > :last-child, .framer-8oykG .framer-1rhbmif > :last-child, .framer-8oykG .framer-1pklv3w > :last-child, .framer-8oykG .framer-1scd9aq > :last-child, .framer-8oykG .framer-19h00co > :last-child, .framer-8oykG .framer-hn8skh > :last-child, .framer-8oykG .framer-mfdp0l > :last-child, .framer-8oykG .framer-k87eq4 > :last-child, .framer-8oykG .framer-2vb1jb > :last-child, .framer-8oykG .framer-16iu5dg > :last-child, .framer-8oykG .framer-1u34e0m > :last-child, .framer-8oykG .framer-1niuwzg > :last-child, .framer-8oykG .framer-zqs6g9 > :last-child { margin-bottom: 0px; } .framer-8oykG .framer-1s7mdj1 > * { margin: 0px; margin-left: calc(100px / 2); margin-right: calc(100px / 2); } .framer-8oykG .framer-1s7mdj1 > :first-child, .framer-8oykG .framer-1s2ffgv > :first-child, .framer-8oykG .framer-1msret4 > :first-child, .framer-8oykG .framer-1gunudb > :first-child, .framer-8oykG .framer-1gihvgu > :first-child, .framer-8oykG .framer-88sof7 > :first-child, .framer-8oykG .framer-1ois7t0 > :first-child, .framer-8oykG .framer-s9sz6t > :first-child, .framer-8oykG .framer-1prlff0 > :first-child, .framer-8oykG .framer-1s5swm7 > :first-child, .framer-8oykG .framer-1ch9a5m > :first-child, .framer-8oykG .framer-1bde7r5 > :first-child, .framer-8oykG .framer-1tqpp1w > :first-child, .framer-8oykG .framer-3g1dvv > :first-child, .framer-8oykG .framer-tier9f > :first-child, .framer-8oykG .framer-wzmmig > :first-child, .framer-8oykG .framer-bgcgpq > :first-child, .framer-8oykG .framer-id36f7 > :first-child, .framer-8oykG .framer-5b5o0l > :first-child, .framer-8oykG .framer-1063i0b > :first-child, .framer-8oykG .framer-e50ihp > :first-child, .framer-8oykG .framer-1e5ajyr > :first-child { margin-left: 0px; } .framer-8oykG .framer-1s7mdj1 > :last-child, .framer-8oykG .framer-1s2ffgv > :last-child, .framer-8oykG .framer-1msret4 > :last-child, .framer-8oykG .framer-1gunudb > :last-child, .framer-8oykG .framer-1gihvgu > :last-child, .framer-8oykG .framer-88sof7 > :last-child, .framer-8oykG .framer-1ois7t0 > :last-child, .framer-8oykG .framer-s9sz6t > :last-child, .framer-8oykG .framer-1prlff0 > :last-child, .framer-8oykG .framer-1s5swm7 > :last-child, .framer-8oykG .framer-1ch9a5m > :last-child, .framer-8oykG .framer-1bde7r5 > :last-child, .framer-8oykG .framer-1tqpp1w > :last-child, .framer-8oykG .framer-3g1dvv > :last-child, .framer-8oykG .framer-tier9f > :last-child, .framer-8oykG .framer-wzmmig > :last-child, .framer-8oykG .framer-bgcgpq > :last-child, .framer-8oykG .framer-id36f7 > :last-child, .framer-8oykG .framer-5b5o0l > :last-child, .framer-8oykG .framer-1063i0b > :last-child, .framer-8oykG .framer-e50ihp > :last-child, .framer-8oykG .framer-1e5ajyr > :last-child { margin-right: 0px; } .framer-8oykG .framer-1s2ffgv > * { margin: 0px; margin-left: calc(69px / 2); margin-right: calc(69px / 2); } .framer-8oykG .framer-1msret4 > *, .framer-8oykG .framer-1bde7r5 > *, .framer-8oykG .framer-1tqpp1w > *, .framer-8oykG .framer-3g1dvv > *, .framer-8oykG .framer-tier9f > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-8oykG .framer-1gunudb > *, .framer-8oykG .framer-1gihvgu > *, .framer-8oykG .framer-88sof7 > *, .framer-8oykG .framer-wzmmig > *, .framer-8oykG .framer-bgcgpq > *, .framer-8oykG .framer-id36f7 > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-8oykG .framer-15ma99s > *, .framer-8oykG .framer-3m434p > * { margin: 0px; margin-bottom: calc(36px / 2); margin-top: calc(36px / 2); } .framer-8oykG .framer-1ois7t0 > *, .framer-8oykG .framer-s9sz6t > *, .framer-8oykG .framer-1prlff0 > *, .framer-8oykG .framer-1s5swm7 > *, .framer-8oykG .framer-5b5o0l > *, .framer-8oykG .framer-1063i0b > *, .framer-8oykG .framer-e50ihp > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-8oykG .framer-1ch9a5m > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-8oykG .framer-12e2j5t > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-8oykG .framer-a0jkp2 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-8oykG .framer-1l2gser > *, .framer-8oykG .framer-1rhbmif > *, .framer-8oykG .framer-19h00co > *, .framer-8oykG .framer-k87eq4 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-8oykG .framer-u46j7a > *, .framer-8oykG .framer-1scd9aq > *, .framer-8oykG .framer-mfdp0l > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-8oykG .framer-1pklv3w > *, .framer-8oykG .framer-hn8skh > *, .framer-8oykG .framer-2vb1jb > *, .framer-8oykG .framer-16iu5dg > *, .framer-8oykG .framer-1u34e0m > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-8oykG .framer-1niuwzg > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-8oykG .framer-zqs6g9 > * { margin: 0px; margin-bottom: calc(35px / 2); margin-top: calc(35px / 2); } .framer-8oykG .framer-1e5ajyr > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } }",
    "@media (min-width: 1440px) { .framer-8oykG .hidden-72rtr7 { display: none !important; } }",
    `@media (min-width: 810px) and (max-width: 1439px) { .framer-8oykG .hidden-1qws17d { display: none !important; } .${q.bodyClassName}-framer-8oykG { background: rgb(14, 14, 14); } .framer-8oykG.framer-72rtr7 { width: 810px; } .framer-8oykG .framer-1s7mdj1 { gap: 35px; max-height: 900px; max-width: 100%; order: 0; top: 5%; transform: translate(-50%, -50%); } .framer-8oykG .framer-1s2ffgv { gap: 36px; } .framer-8oykG .framer-r1fcjk { width: 200px; } .framer-8oykG .framer-14pw8m1 { left: 46%; top: 50%; transform: translate(-50%, -50%); } .framer-8oykG .framer-1bnmktd, .framer-8oykG .framer-aq01w9 { order: 1; } .framer-8oykG .framer-1pc3482 { height: 735px; left: -340px; right: unset; top: calc(46.63299663299665% - 734.5px / 2); width: 591px; } .framer-8oykG .framer-v6p2to { left: unset; right: -201px; top: calc(47.474747474747495% - 512.338134765625px / 2); } .framer-8oykG .framer-1msret4 { left: -50px; right: -580px; } .framer-8oykG .framer-1g7gw5j { bottom: 57px; right: -110px; } .framer-8oykG .framer-kjzddj { bottom: unset; left: -252px; top: 691px; } .framer-8oykG .framer-1mgud0 { height: var(--framer-aspect-ratio-supported, 530px); left: 88px; top: 54%; transform: translateY(-50%) rotate(-169deg); width: 341px; } .framer-8oykG .framer-hynorz { height: var(--framer-aspect-ratio-supported, 271px); left: 259px; top: 90px; width: 271px; } .framer-8oykG .framer-72uwxk { height: 531px; left: calc(50.00000000000002% - 811px / 2); top: 341px; width: 811px; } .framer-8oykG .framer-15ma99s { gap: 0px; left: 50%; } .framer-8oykG .framer-a5qsh4 { align-self: unset; order: 0; width: 773px; } .framer-8oykG .framer-1e65ng4 { bottom: -38px; left: 49%; } .framer-8oykG .framer-cz5wip { bottom: -15px; left: 50%; } .framer-8oykG .framer-1gxgyus { bottom: -11px; left: 49%; } .framer-8oykG .framer-s9sz6t { left: calc(50.06165228113443% - 116px / 2); transform: unset; width: 116px; } .framer-8oykG .framer-1ch9a5m { order: 2; padding: 48px 0px 192px 0px; } .framer-8oykG .framer-1d4lecu { left: -93px; right: -93px; width: unset; } .framer-8oykG .framer-3m434p { flex-basis: 0px; flex-grow: 1; flex-shrink: 0; gap: 0px; height: 875px; width: 1px; } .framer-8oykG .framer-12e2j5t { gap: 0px; width: 100%; } .framer-8oykG .framer-a0jkp2 { gap: 0px; width: 810px; } .framer-8oykG .framer-64vkyv { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 317px; justify-content: center; padding: 0px 0px 0px 0px; width: 100%; } .framer-8oykG .framer-1ktwl9 { bottom: unset; left: 50%; order: 0; top: 49%; transform: translate(-50%, -50%); z-index: 1; } .framer-8oykG .framer-yb9pem { bottom: unset; height: auto; left: 51%; order: 1; right: unset; top: -4px; transform: translateX(-50%); width: 781px; z-index: 1; } .framer-8oykG .framer-1cxnm0 { height: 158px; width: 812px; } .framer-8oykG .framer-o1qqnv { bottom: unset; left: -93px; right: -98px; top: -2px; width: unset; } .framer-8oykG .framer-57bexm { bottom: unset; height: 172px; left: -96px; right: -96px; top: -2px; width: unset; } .framer-8oykG .framer-1fkqiqr { width: 630px; } .framer-8oykG .framer-1s38txq { left: calc(50.00000000000002% - 808px / 2); top: 0px; width: 808px; } .framer-8oykG .framer-khhp6q { bottom: -105px; left: -909px; top: unset; } .framer-8oykG .framer-x9igyy { bottom: 205px; left: unset; right: -477px; top: unset; width: 764px; } .framer-8oykG .framer-123y0hj { left: unset; right: -263px; top: 198px; width: 327px; } .framer-8oykG .framer-l0786b { left: unset; right: -155px; top: 305px; width: 327px; } .framer-8oykG .framer-c3lp9q { left: 50%; top: 54%; transform: translate(-50%, -50%) rotate(-165deg); width: 632px; } .framer-8oykG .framer-8ieo2 { left: unset; right: -458px; top: -24px; width: 487px; } .framer-8oykG .framer-1kpqwp7 { left: -59px; top: -201px; } .framer-8oykG .framer-rake34 { left: unset; right: -589px; top: 123px; width: 364px; } .framer-8oykG .framer-r5sgei { height: var(--framer-aspect-ratio-supported, 336px); left: -108px; width: 336px; } .framer-8oykG .framer-1500fe1 { bottom: 14px; right: -110px; } .framer-8oykG .framer-35zupt { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: auto; justify-content: center; order: 3; padding: 0px 0px 0px 0px; width: 807px; } .framer-8oykG .framer-10pjkfe { height: unset; left: calc(49.9380421313507% - 807px / 2); order: 0; top: 0px; width: 807px; z-index: 1; } .framer-8oykG .framer-19uar6f { height: unset; left: 0px; order: 1; top: 0px; width: 807px; z-index: 0; } .framer-8oykG .framer-1bde7r5 { bottom: unset; flex-direction: column; left: unset; order: 3; position: relative; transform: unset; } .framer-8oykG .framer-1l2gser { align-self: stretch; width: auto; } .framer-8oykG .framer-u46j7a { width: 100%; } .framer-8oykG .framer-1scd9aq { align-content: flex-end; align-items: flex-end; width: 100%; } .framer-8oykG .framer-mfdp0l { padding: 24px 24px 24px 24px; } .framer-8oykG .framer-8qyib { left: calc(50.383141762452134% - 803px / 2); width: 803px; } .framer-8oykG .framer-k87eq4, .framer-8oykG .framer-2vb1jb { align-content: flex-end; align-items: flex-end; } .framer-8oykG .framer-1lpnx2r { left: unset; order: 2; position: relative; top: unset; } .framer-8oykG .framer-1o6sh19 { right: -22px; top: 7px; } .framer-8oykG .framer-1rdopi8 { right: -1px; } .framer-8oykG .framer-1dt7u6m { order: 4; } .framer-8oykG .framer-17ht1ue { height: 471px; left: unset; right: 0px; width: 810px; } .framer-8oykG .framer-115ho2v { height: 755px; left: 0px; } .framer-8oykG .framer-1a7lbld { bottom: -97px; left: -206px; top: unset; } .framer-8oykG .framer-qwcgqa { left: -9px; top: 180px; } .framer-8oykG .framer-12f5gch { height: 398px; left: unset; right: -120px; top: 81px; width: 412px; } .framer-8oykG .framer-jglsce { bottom: -88px; left: unset; right: -14px; top: unset; } .framer-8oykG .framer-ueqi0f { bottom: -80px; left: 204px; top: unset; } .framer-8oykG .framer-1jb0hua { bottom: 113px; height: 327px; left: calc(49.93894993894996% - 565px / 2); width: 565px; } .framer-8oykG .framer-1tqpp1w { flex-direction: column; gap: 0px; } .framer-8oykG .framer-bqgahx { height: 97px; } .framer-8oykG .framer-1wvihv4 { width: 562px; } .framer-8oykG .framer-1u34e0m { left: 50%; top: 49%; transform: translate(-50%, -50%); } .framer-8oykG .framer-3g1dvv { flex-direction: column; gap: 0px; padding: 3px 0px 3px 0px; } .framer-8oykG .framer-xxv9st { height: 97px; width: 478px; } .framer-8oykG .framer-18xsfsu { height: 94px; width: 589px; } .framer-8oykG .framer-urz4wz { height: 127px; width: 546px; } .framer-8oykG .framer-1xn8ik { order: 5; } .framer-8oykG .framer-1niuwzg { align-content: center; align-items: center; bottom: unset; max-width: 900px; top: 65%; transform: translate(-50%, -50%); width: 730px; } .framer-8oykG .framer-1e5ajyr { min-height: 71px; width: 100%; } .framer-8oykG .framer-187h15t { left: calc(50.53619302949064% - 455px / 2); position: absolute; top: calc(50.7042253521127% - 39px / 2); width: 455px; z-index: 1; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-8oykG .framer-1s7mdj1, .framer-8oykG .framer-1s2ffgv, .framer-8oykG .framer-15ma99s, .framer-8oykG .framer-3m434p, .framer-8oykG .framer-12e2j5t, .framer-8oykG .framer-a0jkp2, .framer-8oykG .framer-64vkyv, .framer-8oykG .framer-35zupt, .framer-8oykG .framer-1bde7r5, .framer-8oykG .framer-1tqpp1w, .framer-8oykG .framer-3g1dvv { gap: 0px; } .framer-8oykG .framer-1s7mdj1 > * { margin: 0px; margin-left: calc(35px / 2); margin-right: calc(35px / 2); } .framer-8oykG .framer-1s7mdj1 > :first-child, .framer-8oykG .framer-1s2ffgv > :first-child, .framer-8oykG .framer-64vkyv > :first-child { margin-left: 0px; } .framer-8oykG .framer-1s7mdj1 > :last-child, .framer-8oykG .framer-1s2ffgv > :last-child, .framer-8oykG .framer-64vkyv > :last-child { margin-right: 0px; } .framer-8oykG .framer-1s2ffgv > * { margin: 0px; margin-left: calc(36px / 2); margin-right: calc(36px / 2); } .framer-8oykG .framer-15ma99s > *, .framer-8oykG .framer-3m434p > *, .framer-8oykG .framer-12e2j5t > *, .framer-8oykG .framer-a0jkp2 > *, .framer-8oykG .framer-1tqpp1w > *, .framer-8oykG .framer-3g1dvv > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-8oykG .framer-15ma99s > :first-child, .framer-8oykG .framer-3m434p > :first-child, .framer-8oykG .framer-12e2j5t > :first-child, .framer-8oykG .framer-a0jkp2 > :first-child, .framer-8oykG .framer-35zupt > :first-child, .framer-8oykG .framer-1bde7r5 > :first-child, .framer-8oykG .framer-1tqpp1w > :first-child, .framer-8oykG .framer-3g1dvv > :first-child { margin-top: 0px; } .framer-8oykG .framer-15ma99s > :last-child, .framer-8oykG .framer-3m434p > :last-child, .framer-8oykG .framer-12e2j5t > :last-child, .framer-8oykG .framer-a0jkp2 > :last-child, .framer-8oykG .framer-35zupt > :last-child, .framer-8oykG .framer-1bde7r5 > :last-child, .framer-8oykG .framer-1tqpp1w > :last-child, .framer-8oykG .framer-3g1dvv > :last-child { margin-bottom: 0px; } .framer-8oykG .framer-64vkyv > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-8oykG .framer-35zupt > * { margin: 0px; margin-bottom: calc(64px / 2); margin-top: calc(64px / 2); } .framer-8oykG .framer-1bde7r5 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } }}`,
    `@media (max-width: 809px) { .framer-8oykG .hidden-1um2g67 { display: none !important; } .${q.bodyClassName}-framer-8oykG { background: rgb(14, 14, 14); } .framer-8oykG.framer-72rtr7 { width: 390px; } .framer-8oykG .framer-1s7mdj1 { gap: 83px; order: 0; padding: 8px 24px 20px 24px; top: 5%; transform: translate(-50%, -50%); width: 100%; } .framer-8oykG .framer-ixz0en { align-content: center; align-items: center; border-bottom-left-radius: unset; border-bottom-right-radius: unset; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; justify-content: center; padding: 0px 0px 0px 0px; } .framer-8oykG .framer-mibkv0 { bottom: unset; height: 70px; left: unset; position: relative; width: var(--framer-aspect-ratio-supported, 70px); } .framer-8oykG .framer-r1fcjk { height: 49px; width: 172px; } .framer-8oykG .framer-teuihw { left: unset; right: -11px; top: calc(51.02040816326533% - 24px / 2); } .framer-8oykG .framer-14pw8m1 { left: 46%; top: 50%; transform: translate(-50%, -50%); } .framer-8oykG .framer-1bnmktd { height: 100vh; order: 1; } .framer-8oykG .framer-1flcfkg { left: unset; right: -1px; top: calc(46.44549763033178% - 441px / 2); width: 389px; } .framer-8oykG .framer-1pc3482 { height: 735px; left: -107px; right: unset; top: 3px; width: 388px; } .framer-8oykG .framer-1gfuw1t { height: var(--framer-aspect-ratio-supported, 97px); left: 55px; top: 139px; width: 130px; } .framer-8oykG .framer-15t0xdz { bottom: 156px; height: var(--framer-aspect-ratio-supported, 61px); left: -48px; width: 86px; } .framer-8oykG .framer-q6k7bu { left: 25px; top: -6px; width: 79px; } .framer-8oykG .framer-v6p2to { left: unset; right: -201px; top: calc(48.10426540284362% - 512.338134765625px / 2); } .framer-8oykG .framer-syh54p { bottom: unset; height: var(--framer-aspect-ratio-supported, 130px); left: 253px; right: unset; top: 55%; transform: translateY(-50%) rotate(46deg); width: 176px; } .framer-8oykG .framer-x2w8et { height: 146px; left: calc(54.6082949308756% - 112px / 2); top: 15px; width: 112px; } .framer-8oykG .framer-12ljdh9 { bottom: 149px; height: var(--framer-aspect-ratio-supported, 53px); left: 157px; width: 75px; } .framer-8oykG .framer-1msret4 { left: -120px; right: -930px; } .framer-8oykG .framer-wlz62q { width: 387px; } .framer-8oykG .framer-1g7gw5j { bottom: 62px; height: 187px; right: -102px; transform: rotate(7deg); width: 263px; } .framer-8oykG .framer-kjzddj { bottom: unset; height: 211px; left: -40px; top: 621px; width: 163px; } .framer-8oykG .framer-1mgud0 { bottom: -44px; height: unset; left: -62px; top: -32px; width: var(--framer-aspect-ratio-supported, 185px); } .framer-8oykG .framer-hynorz { height: var(--framer-aspect-ratio-supported, 151px); left: unset; right: -19px; top: -68px; width: 151px; } .framer-8oykG .framer-72uwxk { height: 386px; left: calc(50.00000000000002% - 390px / 2); top: calc(46.56398104265405% - 386px / 2); width: 390px; } .framer-8oykG .framer-15ma99s { gap: 0px; left: 0px; right: 0px; top: 71px; transform: unset; width: unset; } .framer-8oykG .framer-14ww23f, .framer-8oykG .framer-1rhbmif, .framer-8oykG .framer-1yexj4a, .framer-8oykG .framer-1ls4pg7 { width: 100%; } .framer-8oykG .framer-jfuo16 { gap: 4px; width: 100%; } .framer-8oykG .framer-a5qsh4 { align-self: unset; height: 90px; order: 0; width: 100%; } .framer-8oykG .framer-p6qr63 { bottom: -9px; left: 54%; } .framer-8oykG .framer-1e65ng4 { bottom: -7px; left: 53%; } .framer-8oykG .framer-aq01w9 { height: 91px; order: 1; width: 100%; } .framer-8oykG .framer-cz5wip { bottom: 4px; left: 51%; } .framer-8oykG .framer-1gxgyus { bottom: unset; left: 50%; top: -12px; } .framer-8oykG .framer-s9sz6t { left: calc(50.00000000000002% - 116px / 2); transform: unset; width: 116px; } .framer-8oykG .framer-1ch9a5m { flex-direction: column; order: 2; padding: 48px 0px 192px 0px; } .framer-8oykG .framer-1d4lecu { height: 433px; left: calc(50.00000000000002% - 390px / 2); order: 0; top: 0px; width: 390px; } .framer-8oykG .framer-3m434p { gap: 9px; order: 5; padding: 0px 10px 0px 10px; } .framer-8oykG .framer-12e2j5t { order: 0; } .framer-8oykG .framer-a0jkp2 { gap: 8px; } .framer-8oykG .framer-64vkyv { height: 164px; order: 0; width: 369px; } .framer-8oykG .framer-1ktwl9 { bottom: unset; height: 166px; left: calc(50.40650406504067% - 365px / 2); top: 0px; transform: unset; white-space: pre-wrap; width: 365px; word-break: break-word; word-wrap: break-word; } .framer-8oykG .framer-yb9pem { bottom: unset; height: 164px; left: calc(49.86449864498647% - 365px / 2); right: unset; top: -3px; width: 365px; } .framer-8oykG .framer-1cxnm0 { align-self: stretch; order: 1; width: auto; } .framer-8oykG .framer-o1qqnv { bottom: -1px; height: unset; left: unset; right: -2px; top: -1px; width: 369px; } .framer-8oykG .framer-57bexm { bottom: 0px; height: unset; left: 0px; top: -2px; width: unset; } .framer-8oykG .framer-1fkqiqr { order: 1; width: 348px; } .framer-8oykG .framer-1s38txq { left: calc(50.00000000000002% - 390px / 2); order: 2; top: 0px; width: 390px; } .framer-8oykG .framer-khhp6q { bottom: -105px; left: -909px; top: unset; } .framer-8oykG .framer-x9igyy { bottom: 205px; left: unset; right: -477px; top: unset; width: 764px; } .framer-8oykG .framer-123y0hj { left: unset; right: -263px; top: 198px; width: 327px; } .framer-8oykG .framer-l0786b { left: unset; right: -155px; top: 305px; width: 327px; } .framer-8oykG .framer-c3lp9q { left: 50%; top: 54%; transform: translate(-50%, -50%) rotate(-165deg); width: 632px; } .framer-8oykG .framer-8ieo2 { left: unset; right: -458px; top: -24px; width: 487px; } .framer-8oykG .framer-1kpqwp7 { left: -59px; top: -201px; } .framer-8oykG .framer-rake34 { left: unset; right: -589px; top: 123px; width: 364px; } .framer-8oykG .framer-udyxh6 { height: 538px; left: calc(50.00000000000002% - 390px / 2); order: 1; top: 0px; width: 390px; } .framer-8oykG .framer-r5sgei { bottom: 0px; height: var(--framer-aspect-ratio-supported, 251px); left: -109px; order: 4; width: 251px; } .framer-8oykG .framer-1500fe1 { bottom: 0px; height: var(--framer-aspect-ratio-supported, 214px); order: 3; right: -60px; width: 214px; } .framer-8oykG .framer-35zupt { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: auto; justify-content: center; order: 3; padding: 0px 0px 0px 0px; } .framer-8oykG .framer-10pjkfe { height: unset; left: calc(49.9380421313507% - 807px / 2); order: 0; top: 0px; width: 807px; z-index: 1; } .framer-8oykG .framer-19uar6f { bottom: unset; height: 737px; left: 0px; order: 3; right: 0px; top: calc(49.92628992628995% - 737px / 2); width: unset; z-index: 0; } .framer-8oykG .framer-1bde7r5 { bottom: unset; flex-direction: column; left: unset; order: 2; padding: 16px 16px 16px 16px; position: relative; transform: unset; width: 100%; } .framer-8oykG .framer-1l2gser { padding: 10px 0px 0px 0px; width: 100%; } .framer-8oykG .framer-u46j7a { order: 0; width: 100%; } .framer-8oykG .framer-1uon8ec { width: 308px; } .framer-8oykG .framer-1scd9aq { align-content: flex-end; align-items: flex-end; order: 1; width: 100%; } .framer-8oykG .framer-orfmtr { width: 307px; } .framer-8oykG .framer-mfdp0l { padding: 24px 24px 24px 24px; width: 100%; } .framer-8oykG .framer-8qyib { left: calc(50.383141762452134% - 803px / 2); width: 803px; } .framer-8oykG .framer-k87eq4, .framer-8oykG .framer-2vb1jb { align-content: flex-end; align-items: flex-end; width: 100%; } .framer-8oykG .framer-1lpnx2r { height: 66px; left: unset; order: 1; position: relative; top: unset; width: 378px; } .framer-8oykG .framer-1o6sh19 { height: 69px; right: -1px; top: 0px; width: 369px; } .framer-8oykG .framer-1rdopi8 { height: 0px; left: calc(50.00000000000002% - 369px / 2); right: unset; width: 369px; } .framer-8oykG .framer-1dt7u6m { order: 4; } .framer-8oykG .framer-17ht1ue { height: 320px; left: 0px; right: 0px; width: unset; } .framer-8oykG .framer-115ho2v { height: 737px; left: 0px; right: -1px; top: -185px; } .framer-8oykG .framer-1a7lbld { bottom: -84px; height: var(--framer-aspect-ratio-supported, 221px); left: -113px; top: unset; width: 221px; } .framer-8oykG .framer-qwcgqa { left: -119px; top: 160px; } .framer-8oykG .framer-12f5gch { height: 398px; left: unset; right: -330px; top: 81px; width: 412px; } .framer-8oykG .framer-jglsce { bottom: -24px; height: var(--framer-aspect-ratio-supported, 172px); left: unset; right: -67px; top: unset; width: 172px; } .framer-8oykG .framer-ueqi0f { bottom: -80px; left: unset; right: -225px; top: unset; } .framer-8oykG .framer-1jb0hua { bottom: 93px; height: unset; left: 2px; right: -1px; top: 317px; width: unset; } .framer-8oykG .framer-16iu5dg { left: 51%; right: unset; top: 50%; transform: translate(-50%, -50%); } .framer-8oykG .framer-1tqpp1w { flex-direction: column; gap: 0px; } .framer-8oykG .framer-bqgahx, .framer-8oykG .framer-1dkmger, .framer-8oykG .framer-1wvihv4, .framer-8oykG .framer-xxv9st, .framer-8oykG .framer-18xsfsu { height: auto; white-space: pre; width: auto; } .framer-8oykG .framer-1u34e0m { left: 50%; top: 49%; transform: translate(-50%, -50%); } .framer-8oykG .framer-3g1dvv { align-self: stretch; flex-direction: column; gap: 0px; order: 0; padding: 3px 0px 3px 0px; width: auto; } .framer-8oykG .framer-urz4wz { height: auto; order: 1; white-space: pre; width: auto; } .framer-8oykG .framer-1xn8ik { order: 5; } .framer-8oykG .framer-tier9f { left: -50px; right: -1000px; } .framer-8oykG .framer-143lp6p, .framer-8oykG .framer-5crfg5, .framer-8oykG .framer-aretcy { height: 48px; width: 48px; } .framer-8oykG .framer-1uon6dw { height: 39px; left: 22px; top: 5px; width: 39px; } .framer-8oykG .framer-1v13bt9 { left: 18px; top: 20px; } .framer-8oykG .framer-1niuwzg { align-content: center; align-items: center; bottom: unset; left: 51%; top: 62%; transform: translate(-50%, -50%); width: 389px; } .framer-8oykG .framer-grtvx { align-content: center; align-items: center; flex-direction: column; width: 90%; } .framer-8oykG .framer-zqs6g9 { align-content: center; align-items: center; gap: 20px; } .framer-8oykG .framer-187h15t { height: 27px; order: 0; width: 455px; } .framer-8oykG .framer-frhx5q, .framer-8oykG .framer-139lmh6 { left: 50%; transform: translateX(-50%); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-8oykG .framer-1s7mdj1, .framer-8oykG .framer-ixz0en, .framer-8oykG .framer-15ma99s, .framer-8oykG .framer-jfuo16, .framer-8oykG .framer-1ch9a5m, .framer-8oykG .framer-3m434p, .framer-8oykG .framer-a0jkp2, .framer-8oykG .framer-35zupt, .framer-8oykG .framer-1bde7r5, .framer-8oykG .framer-1tqpp1w, .framer-8oykG .framer-3g1dvv, .framer-8oykG .framer-grtvx, .framer-8oykG .framer-zqs6g9 { gap: 0px; } .framer-8oykG .framer-1s7mdj1 > * { margin: 0px; margin-left: calc(83px / 2); margin-right: calc(83px / 2); } .framer-8oykG .framer-1s7mdj1 > :first-child, .framer-8oykG .framer-ixz0en > :first-child { margin-left: 0px; } .framer-8oykG .framer-1s7mdj1 > :last-child, .framer-8oykG .framer-ixz0en > :last-child { margin-right: 0px; } .framer-8oykG .framer-ixz0en > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-8oykG .framer-15ma99s > *, .framer-8oykG .framer-1ch9a5m > *, .framer-8oykG .framer-1tqpp1w > *, .framer-8oykG .framer-3g1dvv > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-8oykG .framer-15ma99s > :first-child, .framer-8oykG .framer-jfuo16 > :first-child, .framer-8oykG .framer-1ch9a5m > :first-child, .framer-8oykG .framer-3m434p > :first-child, .framer-8oykG .framer-a0jkp2 > :first-child, .framer-8oykG .framer-35zupt > :first-child, .framer-8oykG .framer-1bde7r5 > :first-child, .framer-8oykG .framer-1tqpp1w > :first-child, .framer-8oykG .framer-3g1dvv > :first-child, .framer-8oykG .framer-zqs6g9 > :first-child { margin-top: 0px; } .framer-8oykG .framer-15ma99s > :last-child, .framer-8oykG .framer-jfuo16 > :last-child, .framer-8oykG .framer-1ch9a5m > :last-child, .framer-8oykG .framer-3m434p > :last-child, .framer-8oykG .framer-a0jkp2 > :last-child, .framer-8oykG .framer-35zupt > :last-child, .framer-8oykG .framer-1bde7r5 > :last-child, .framer-8oykG .framer-1tqpp1w > :last-child, .framer-8oykG .framer-3g1dvv > :last-child, .framer-8oykG .framer-zqs6g9 > :last-child { margin-bottom: 0px; } .framer-8oykG .framer-jfuo16 > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-8oykG .framer-3m434p > * { margin: 0px; margin-bottom: calc(9px / 2); margin-top: calc(9px / 2); } .framer-8oykG .framer-a0jkp2 > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-8oykG .framer-35zupt > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-8oykG .framer-1bde7r5 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-8oykG .framer-grtvx > *, .framer-8oykG .framer-grtvx > :first-child, .framer-8oykG .framer-grtvx > :last-child { margin: 0px; } .framer-8oykG .framer-zqs6g9 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } }}`,
    ...$,
  ],
  R = A(Ee, Me, "framer-8oykG"),
  ft = R;
R.displayName = "Home";
R.defaultProps = { height: 4054, width: 1440 };
P(R, [
  {
    family: "Comic Sans MS Bold",
    source: "custom",
    url: "/assets/fonts/nkuK6CcFLQo8G2pUbXRSmBXs.woff2",
  },
  {
    family: "Roboto",
    source: "google",
    style: "normal",
    url: "/assets/fonts/KFOmCnqEu92Fr1Me4GZLCzYlKw.woff2",
    weight: "400",
  },
  {
    family: "Cucciolo Rough Regular",
    source: "custom",
    url: "/assets/fonts/oy8VzC6h4Fvq6JOjgdHtz2N9BS0.woff2",
  },
  ..._,
]);
var lt = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FrameraugiA20Il",
      slots: [],
      annotations: {
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Z044CjP48":{"layout":["fixed","auto"]},"tiAv0zJqn":{"layout":["fixed","auto"]}}}',
        framerContractVersion: "1",
        framerResponsiveScreen: "",
        framerIntrinsicWidth: "1440",
        framerImmutableVariables: "true",
        framerIntrinsicHeight: "4054",
        framerDisplayContentsDiv: "false",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { lt as __FramerMetadata__, ft as default };
//# sourceMappingURL=D_l1CwlDDsOdbOgKYkIZq73wU0uyL-1ljF94RDICFH4.F2YAP6EI.mjs.map
