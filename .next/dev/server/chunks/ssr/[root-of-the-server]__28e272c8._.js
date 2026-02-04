module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/StaggeredMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StaggeredMenu",
    ()=>StaggeredMenu,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
;
;
;
const StaggeredMenu = ({ position = "right", colors = [
    "#B19EEF",
    "#5227FF"
], items = [], socialItems = [], displaySocials = true, displayItemNumbering = true, className, logoUrl = "/src/assets/logos/reactbits-gh-white.svg", menuButtonColor = "#fff", openMenuButtonColor = "#fff", changeMenuColorOnOpen = true, accentColor = "#5227FF", isFixed = false, closeOnClickAway = true, onMenuOpen, onMenuClose })=>{
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const openRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const preLayersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const preLayerElsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const plusHRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const plusVRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const iconRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textInnerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textWrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [textLines, setTextLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        "Menu",
        "Close"
    ]);
    const openTlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const closeTweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const spinTweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textCycleAnimRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const colorTweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toggleBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const busyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const itemEntranceTweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context(()=>{
            const panel = panelRef.current;
            const preContainer = preLayersRef.current;
            const plusH = plusHRef.current;
            const plusV = plusVRef.current;
            const icon = iconRef.current;
            const textInner = textInnerRef.current;
            if (!panel || !plusH || !plusV || !icon || !textInner) return;
            let preLayers = [];
            if (preContainer) {
                preLayers = Array.from(preContainer.querySelectorAll(".sm-prelayer"));
            }
            preLayerElsRef.current = preLayers;
            const offscreen = position === "left" ? -100 : 100;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set([
                panel,
                ...preLayers
            ], {
                xPercent: offscreen
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(plusH, {
                transformOrigin: "50% 50%",
                rotate: 0
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(plusV, {
                transformOrigin: "50% 50%",
                rotate: 90
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(icon, {
                rotate: 0,
                transformOrigin: "50% 50%"
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(textInner, {
                yPercent: 0
            });
            if (toggleBtnRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(toggleBtnRef.current, {
                color: menuButtonColor
            });
        });
        return ()=>ctx.revert();
    }, [
        menuButtonColor,
        position
    ]);
    const buildOpenTimeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const panel = panelRef.current;
        const layers = preLayerElsRef.current;
        if (!panel) return null;
        openTlRef.current?.kill();
        if (closeTweenRef.current) {
            closeTweenRef.current.kill();
            closeTweenRef.current = null;
        }
        itemEntranceTweenRef.current?.kill();
        const itemEls = Array.from(panel.querySelectorAll(".sm-panel-itemLabel"));
        const numberEls = Array.from(panel.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item"));
        const socialTitle = panel.querySelector(".sm-socials-title");
        const socialLinks = Array.from(panel.querySelectorAll(".sm-socials-link"));
        const layerStates = layers.map((el)=>({
                el,
                start: Number(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].getProperty(el, "xPercent"))
            }));
        const panelStart = Number(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].getProperty(panel, "xPercent"));
        if (itemEls.length) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(itemEls, {
            yPercent: 140,
            rotate: 10
        });
        if (numberEls.length) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(numberEls, {
            ["--sm-num-opacity"]: 0
        });
        if (socialTitle) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(socialTitle, {
            opacity: 0
        });
        if (socialLinks.length) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(socialLinks, {
            y: 25,
            opacity: 0
        });
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
            paused: true
        });
        layerStates.forEach((ls, i)=>{
            tl.fromTo(ls.el, {
                xPercent: ls.start
            }, {
                xPercent: 0,
                duration: 0.5,
                ease: "power4.out"
            }, i * 0.07);
        });
        const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
        const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
        const panelDuration = 0.65;
        tl.fromTo(panel, {
            xPercent: panelStart
        }, {
            xPercent: 0,
            duration: panelDuration,
            ease: "power4.out"
        }, panelInsertTime);
        if (itemEls.length) {
            const itemsStartRatio = 0.15;
            const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;
            tl.to(itemEls, {
                yPercent: 0,
                rotate: 0,
                duration: 1,
                ease: "power4.out",
                stagger: {
                    each: 0.1,
                    from: "start"
                }
            }, itemsStart);
            if (numberEls.length) {
                tl.to(numberEls, {
                    duration: 0.6,
                    ease: "power2.out",
                    ["--sm-num-opacity"]: 1,
                    stagger: {
                        each: 0.08,
                        from: "start"
                    }
                }, itemsStart + 0.1);
            }
        }
        if (socialTitle || socialLinks.length) {
            const socialsStart = panelInsertTime + panelDuration * 0.4;
            if (socialTitle) tl.to(socialTitle, {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out"
            }, socialsStart);
            if (socialLinks.length) {
                tl.to(socialLinks, {
                    y: 0,
                    opacity: 1,
                    duration: 0.55,
                    ease: "power3.out",
                    stagger: {
                        each: 0.08,
                        from: "start"
                    },
                    onComplete: ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(socialLinks, {
                            clearProps: "opacity"
                        });
                    }
                }, socialsStart + 0.04);
            }
        }
        openTlRef.current = tl;
        return tl;
    }, [
        position
    ]);
    const playOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (busyRef.current) return;
        busyRef.current = true;
        const tl = buildOpenTimeline();
        if (tl) {
            tl.eventCallback("onComplete", ()=>{
                busyRef.current = false;
            });
            tl.play(0);
        } else {
            busyRef.current = false;
        }
    }, [
        buildOpenTimeline
    ]);
    const playClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        openTlRef.current?.kill();
        openTlRef.current = null;
        itemEntranceTweenRef.current?.kill();
        const panel = panelRef.current;
        const layers = preLayerElsRef.current;
        if (!panel) return;
        const all = [
            ...layers,
            panel
        ];
        closeTweenRef.current?.kill();
        const offscreen = position === "left" ? -100 : 100;
        closeTweenRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(all, {
            xPercent: offscreen,
            duration: 0.32,
            ease: "power3.in",
            overwrite: "auto",
            onComplete: ()=>{
                const itemEls = Array.from(panel.querySelectorAll(".sm-panel-itemLabel"));
                if (itemEls.length) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(itemEls, {
                    yPercent: 140,
                    rotate: 10
                });
                const numberEls = Array.from(panel.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item"));
                if (numberEls.length) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(numberEls, {
                    ["--sm-num-opacity"]: 0
                });
                const socialTitle = panel.querySelector(".sm-socials-title");
                const socialLinks = Array.from(panel.querySelectorAll(".sm-socials-link"));
                if (socialTitle) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(socialTitle, {
                    opacity: 0
                });
                if (socialLinks.length) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(socialLinks, {
                    y: 25,
                    opacity: 0
                });
                busyRef.current = false;
            }
        });
    }, [
        position
    ]);
    const animateIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((opening)=>{
        const icon = iconRef.current;
        const h = plusHRef.current;
        const v = plusVRef.current;
        if (!icon || !h || !v) return;
        spinTweenRef.current?.kill();
        if (opening) {
            // ensure container never rotates
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(icon, {
                rotate: 0,
                transformOrigin: "50% 50%"
            });
            spinTweenRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                defaults: {
                    ease: "power4.out"
                }
            }).to(h, {
                rotate: 45,
                duration: 0.5
            }, 0).to(v, {
                rotate: -45,
                duration: 0.5
            }, 0);
        } else {
            spinTweenRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                defaults: {
                    ease: "power3.inOut"
                }
            }).to(h, {
                rotate: 0,
                duration: 0.35
            }, 0).to(v, {
                rotate: 90,
                duration: 0.35
            }, 0).to(icon, {
                rotate: 0,
                duration: 0.001
            }, 0);
        }
    }, []);
    const animateColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((opening)=>{
        const btn = toggleBtnRef.current;
        if (!btn) return;
        colorTweenRef.current?.kill();
        if (changeMenuColorOnOpen) {
            const targetColor = opening ? openMenuButtonColor : menuButtonColor;
            colorTweenRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(btn, {
                color: targetColor,
                delay: 0.18,
                duration: 0.3,
                ease: "power2.out"
            });
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(btn, {
                color: menuButtonColor
            });
        }
    }, [
        openMenuButtonColor,
        menuButtonColor,
        changeMenuColorOnOpen
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (toggleBtnRef.current) {
            if (changeMenuColorOnOpen) {
                const targetColor = openRef.current ? openMenuButtonColor : menuButtonColor;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(toggleBtnRef.current, {
                    color: targetColor
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(toggleBtnRef.current, {
                    color: menuButtonColor
                });
            }
        }
    }, [
        changeMenuColorOnOpen,
        menuButtonColor,
        openMenuButtonColor
    ]);
    const animateText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((opening)=>{
        const inner = textInnerRef.current;
        if (!inner) return;
        textCycleAnimRef.current?.kill();
        const currentLabel = opening ? "Menu" : "Close";
        const targetLabel = opening ? "Close" : "Menu";
        const cycles = 3;
        const seq = [
            currentLabel
        ];
        let last = currentLabel;
        for(let i = 0; i < cycles; i++){
            last = last === "Menu" ? "Close" : "Menu";
            seq.push(last);
        }
        if (last !== targetLabel) seq.push(targetLabel);
        seq.push(targetLabel);
        setTextLines(seq);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(inner, {
            yPercent: 0
        });
        const lineCount = seq.length;
        const finalShift = (lineCount - 1) / lineCount * 100;
        textCycleAnimRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(inner, {
            yPercent: -finalShift,
            duration: 0.5 + lineCount * 0.07,
            ease: "power4.out"
        });
    }, []);
    const toggleMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const target = !openRef.current;
        openRef.current = target;
        setOpen(target);
        if (target) {
            onMenuOpen?.();
            playOpen();
        } else {
            onMenuClose?.();
            playClose();
        }
        animateIcon(target);
        animateColor(target);
        animateText(target);
    }, [
        playOpen,
        playClose,
        animateIcon,
        animateColor,
        animateText,
        onMenuOpen,
        onMenuClose
    ]);
    const closeMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (openRef.current) {
            openRef.current = false;
            setOpen(false);
            onMenuClose?.();
            playClose();
            animateIcon(false);
            animateColor(false);
            animateText(false);
        }
    }, [
        playClose,
        animateIcon,
        animateColor,
        animateText,
        onMenuClose
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (!closeOnClickAway || !open) return;
        const handleClickOutside = (event)=>{
            if (panelRef.current && !panelRef.current.contains(event.target) && toggleBtnRef.current && !toggleBtnRef.current.contains(event.target)) {
                closeMenu();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [
        closeOnClickAway,
        open,
        closeMenu
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `sm-scope z-40 ${isFixed ? "fixed top-0 left-0 w-screen h-screen overflow-hidden" : "w-full h-full"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (className ? className + " " : "") + "staggered-menu-wrapper pointer-events-none relative w-full h-full z-40",
                style: accentColor ? {
                    ["--sm-accent"]: accentColor
                } : undefined,
                "data-position": position,
                "data-open": open || undefined,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: preLayersRef,
                        className: "sm-prelayers absolute top-0 right-0 bottom-0 pointer-events-none z-5",
                        "aria-hidden": "true",
                        children: (()=>{
                            const raw = colors && colors.length ? colors.slice(0, 4) : [
                                "#1e1e22",
                                "#35353c"
                            ];
                            let arr = [
                                ...raw
                            ];
                            if (arr.length >= 3) {
                                const mid = Math.floor(arr.length / 2);
                                arr.splice(mid, 1);
                            }
                            return arr.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm-prelayer absolute top-0 right-0 h-full w-full translate-x-0",
                                    style: {
                                        background: c
                                    }
                                }, i, false, {
                                    fileName: "[project]/components/StaggeredMenu.tsx",
                                    lineNumber: 472,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)));
                        })()
                    }, void 0, false, {
                        fileName: "[project]/components/StaggeredMenu.tsx",
                        lineNumber: 456,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "staggered-menu-header absolute top-0 left-0 w-full flex items-center justify-between p-[2em] bg-transparent pointer-events-none z-20",
                        "aria-label": "Main navigation header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sm-logo flex items-center select-none pointer-events-auto",
                                "aria-label": "Logo",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: logoUrl || "/src/assets/logos/reactbits-gh-white.svg",
                                    alt: "Logo",
                                    className: "sm-logo-img block h-8 w-auto object-contain",
                                    draggable: false,
                                    width: 110,
                                    height: 24
                                }, void 0, false, {
                                    fileName: "[project]/components/StaggeredMenu.tsx",
                                    lineNumber: 489,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/StaggeredMenu.tsx",
                                lineNumber: 485,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: toggleBtnRef,
                                className: `sm-toggle relative inline-flex items-center gap-[0.3rem] bg-transparent border-0 cursor-pointer font-medium leading-none overflow-visible pointer-events-auto ${open ? "text-black" : "text-[#e9e9ef]"}`,
                                "aria-label": open ? "Close menu" : "Open menu",
                                "aria-expanded": open,
                                "aria-controls": "staggered-menu-panel",
                                onClick: toggleMenu,
                                type: "button",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        ref: textWrapRef,
                                        className: "sm-toggle-textWrap relative inline-block h-[1em] overflow-hidden whitespace-nowrap w-(--sm-toggle-width,auto) min-w-(--sm-toggle-width,auto)",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            ref: textInnerRef,
                                            className: "sm-toggle-textInner flex flex-col leading-none",
                                            children: textLines.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sm-toggle-line block h-[1em] leading-none",
                                                    children: l
                                                }, i, false, {
                                                    fileName: "[project]/components/StaggeredMenu.tsx",
                                                    lineNumber: 520,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/StaggeredMenu.tsx",
                                            lineNumber: 515,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/StaggeredMenu.tsx",
                                        lineNumber: 510,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        ref: iconRef,
                                        className: "sm-icon relative w-3.5 h-3.5 shrink-0 inline-flex items-center justify-center will-change-transform",
                                        "aria-hidden": "true",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                ref: plusHRef,
                                                className: "sm-icon-line absolute left-1/2 top-1/2 w-full h-0.5 bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2 will-change-transform"
                                            }, void 0, false, {
                                                fileName: "[project]/components/StaggeredMenu.tsx",
                                                lineNumber: 535,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                ref: plusVRef,
                                                className: "sm-icon-line sm-icon-line-v absolute left-1/2 top-1/2 w-full h-0.5 bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2 will-change-transform"
                                            }, void 0, false, {
                                                fileName: "[project]/components/StaggeredMenu.tsx",
                                                lineNumber: 539,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/StaggeredMenu.tsx",
                                        lineNumber: 530,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/StaggeredMenu.tsx",
                                lineNumber: 499,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/StaggeredMenu.tsx",
                        lineNumber: 481,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        id: "staggered-menu-panel",
                        ref: panelRef,
                        className: "staggered-menu-panel absolute top-0 right-0 h-full bg-white flex flex-col p-[6em_2em_2em_2em] overflow-y-auto z-10 backdrop-blur-md pointer-events-auto",
                        style: {
                            WebkitBackdropFilter: "blur(12px)"
                        },
                        "aria-hidden": !open,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sm-panel-inner flex-1 flex flex-col gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "sm-panel-list list-none m-0 p-0 flex flex-col gap-2",
                                    role: "list",
                                    "data-numbering": displayItemNumbering || undefined,
                                    children: items && items.length ? items.map((it, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "sm-panel-itemWrap relative overflow-hidden leading-none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "sm-panel-item relative text-black font-semibold text-[4rem] cursor-pointer leading-none tracking-[-2px] uppercase transition-[background,color] duration-150 ease-linear inline-block no-underline pr-[1.4em]",
                                                href: it.link,
                                                "aria-label": it.ariaLabel,
                                                "data-index": idx + 1,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sm-panel-itemLabel inline-block origin-[50%_100%] will-change-transform",
                                                    children: it.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/StaggeredMenu.tsx",
                                                    lineNumber: 572,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/StaggeredMenu.tsx",
                                                lineNumber: 566,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, it.label + idx, false, {
                                            fileName: "[project]/components/StaggeredMenu.tsx",
                                            lineNumber: 562,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "sm-panel-itemWrap relative overflow-hidden leading-none",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sm-panel-item relative text-black font-semibold text-[4rem] cursor-pointer leading-none tracking-[-2px] uppercase transition-[background,color] duration-150 ease-linear inline-block no-underline pr-[1.4em]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sm-panel-itemLabel inline-block origin-[50%_100%] will-change-transform",
                                                children: "No items"
                                            }, void 0, false, {
                                                fileName: "[project]/components/StaggeredMenu.tsx",
                                                lineNumber: 584,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/StaggeredMenu.tsx",
                                            lineNumber: 583,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/StaggeredMenu.tsx",
                                        lineNumber: 579,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/StaggeredMenu.tsx",
                                    lineNumber: 555,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                displaySocials && socialItems && socialItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm-socials mt-auto pt-8 flex flex-col gap-3",
                                    "aria-label": "Social links",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "sm-socials-title m-0 text-base font-medium text-(--sm-accent,#ff0000)",
                                            children: "Socials"
                                        }, void 0, false, {
                                            fileName: "[project]/components/StaggeredMenu.tsx",
                                            lineNumber: 597,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "sm-socials-list list-none m-0 p-0 flex flex-row items-center gap-4 flex-wrap",
                                            role: "list",
                                            children: socialItems.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "sm-socials-item",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: s.link,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "sm-socials-link text-[1.2rem] font-medium text-[#111] no-underline relative inline-block py-0.5 transition-[color,opacity] duration-300 ease-linear",
                                                        children: s.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/StaggeredMenu.tsx",
                                                        lineNumber: 606,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, s.label + i, false, {
                                                    fileName: "[project]/components/StaggeredMenu.tsx",
                                                    lineNumber: 605,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/StaggeredMenu.tsx",
                                            lineNumber: 600,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/StaggeredMenu.tsx",
                                    lineNumber: 593,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/StaggeredMenu.tsx",
                            lineNumber: 554,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/StaggeredMenu.tsx",
                        lineNumber: 547,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/StaggeredMenu.tsx",
                lineNumber: 443,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
      .main-content {
  transition: transform 0.3s ease; /* Smooth transition for moving */
}
  .sm-scope[data-open="true"] .main-content {
  transform: translateX(-260px); /* Adjust this width to the menu's width */
}
.sm-scope {
  position: fixed; /* Keep full screen */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; /* Prevent body scroll */
  z-index: 40;
  pointer-events: none;
}

.staggered-menu-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 40;
  pointer-events: none;
}
  .sm-scope[data-open="true"] .staggered-menu-wrapper {
  transform: translateX(0); /* Make menu appear on the right */
}


.staggered-menu-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em;
  background: transparent;
  pointer-events: none;
  z-index: 20;
}

.staggered-menu-header > * {
  pointer-events: auto;
}

.sm-logo {
  display: flex;
  align-items: center;
  user-select: none;
}

.sm-logo-img {
  display: block;
  height: 43px;
  width: auto;
  object-fit: contain;
}

.sm-toggle {
  position: relative;
 
 
  align-items: center;
  gap: 0.7rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #e9e9ef;
  font-weight: 500;
  line-height: 1;
  overflow: visible;
  pointer-events: auto;
}

.sm-toggle:focus-visible {
  outline: 2px solid #ffffffaa;
  outline-offset: 4px;
  border-radius: 4px;
}

.sm-toggle-textWrap {
  position: relative;
  display: inline-block;
  height: 1em;
  overflow: hidden;
  white-space: nowrap;
  width: var(--sm-toggle-width, auto);
  min-width: var(--sm-toggle-width, auto);
}

.sm-toggle-textInner {
  color: #000;
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.sm-toggle-line {
  display: block;
  height: 1em;
  line-height: 1;
}

.sm-icon {
  position: relative;
  width: 14px;
  height: 14px;
  flex: 0 0 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
}

.sm-icon-line {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 2px;
  background: #000;
  border-radius: 2px;
  transform: translate(-50%, -50%);
  will-change: transform;
}

.sm-panel-itemWrap {
  position: relative;
  overflow: hidden;
  line-height: 1;
}

.staggered-menu-panel {
  position: absolute;
  top: 0;
  right: 0;
  width: clamp(220px, 35vw, 380px);
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 6em 2em 2em 2em; /* top padding stays for design */
  overflow-y: auto; /* allow scrolling */
  z-index: 10;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  pointer-events: auto;
}

[data-position='left'] .staggered-menu-panel {
  right: auto;
  left: 0;
}

.sm-prelayers {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: clamp(260px, 35vw, 380px);
  pointer-events: none;
  z-index: 5;
}

[data-position='left'] .sm-prelayers {
  right: auto;
  left: 0;
}

.sm-prelayer {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  transform: translateX(0);
}

.sm-panel-inner {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  overflow-y: auto; /* allow internal scrolling */
}

.sm-socials {
  margin-top: auto;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.sm-socials-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  color: var(--sm-accent, #000);
}

.sm-socials-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.sm-socials-link {
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
  text-decoration: none;
  position: relative;
  padding: 2px 0;
  display: inline-block;
  transition: color 0.3s ease, opacity 0.3s ease;
}

.sm-socials-list:hover .sm-socials-link:not(:hover),
.sm-socials-list:focus-within .sm-socials-link:not(:focus-visible) {
  opacity: 0.35;
}

.sm-socials-link:hover,
.sm-socials-link:focus-visible {
  opacity: 1;
  color: #006eff;
}

.sm-panel-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sm-panel-item {
  position: relative;
  color: #000;
  font-weight: 600;
  font-size: 4rem;
  cursor: pointer;
  line-height: 1;
  letter-spacing: -2px;
  text-transform: uppercase;
  transition: background 0.25s, color 0.25s;
  display: inline-block;
  text-decoration: none;
  padding-right: 1.4em;
}

.sm-panel-itemLabel {
  display: inline-block;
  will-change: transform;
  transform-origin: 50% 100%;
}

.sm-panel-item:hover {
  color: #006eff;
}

.sm-panel-list[data-numbering] {
  counter-reset: smItem;
}

.sm-panel-list[data-numbering] .sm-panel-item::after {
  counter-increment: smItem;
  content: counter(smItem, decimal-leading-zero);
  position: absolute;
  top: 0.1em;
  right: 3.2em;
  font-size: 18px;
  font-weight: 400;
  color: var(--sm-accent, #ff0000);
  letter-spacing: 0;
  pointer-events: none;
  user-select: none;
  opacity: var(--sm-num-opacity, 0);
}

@media (max-width: 1024px) {
  .staggered-menu-panel {
    width: 100%;
    left: 0;
    right: 0;
  }
}

@media (max-width: 640px) {
  .staggered-menu-panel {
    width: 100%;
    left: 0;
    right: 0;
  }
}
  `
            }, void 0, false, {
                fileName: "[project]/components/StaggeredMenu.tsx",
                lineNumber: 622,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/StaggeredMenu.tsx",
        lineNumber: 440,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = StaggeredMenu;
}),
"[project]/app/layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StaggeredMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/StaggeredMenu.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function RootLayout({ children }) {
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuItems = [
        {
            label: "Home",
            ariaLabel: "Go to home page",
            link: "/"
        },
        {
            label: "About",
            ariaLabel: "Learn about us",
            link: "/about"
        },
        {
            label: "Services",
            ariaLabel: "View our services",
            link: "/services"
        },
        {
            label: "Contact",
            ariaLabel: "Get in touch",
            link: "/contact"
        }
    ];
    const socialItems = [
        {
            label: "Twitter",
            link: "https://twitter.com"
        },
        {
            label: "GitHub",
            link: "https://github.com"
        },
        {
            label: "LinkedIn",
            link: "https://linkedin.com"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: "antialiased",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StaggeredMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        position: "right",
                        items: menuItems,
                        socialItems: socialItems,
                        displaySocials: true,
                        displayItemNumbering: true,
                        menuButtonColor: "#000 dark:#fff",
                        openMenuButtonColor: "#000 dark:#fff",
                        changeMenuColorOnOpen: true,
                        colors: [
                            "#35c9fb",
                            "#006eff"
                        ],
                        logoUrl: "/BODON-black.png",
                        accentColor: "#background",
                        isFixed: true,
                        onMenuOpen: ()=>setIsMenuOpen(true),
                        onMenuClose: ()=>setIsMenuOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/app/layout.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/layout.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "content-wrapper",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Children.map(children, (child)=>{
                        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(child, {
                            isMenuOpen
                        });
                    })
                }, void 0, false, {
                    fileName: "[project]/app/layout.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/layout.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/layout.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__28e272c8._.js.map