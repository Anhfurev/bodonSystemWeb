(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/StaggeredMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StaggeredMenu",
    ()=>StaggeredMenu,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const StaggeredMenu = ({ position = "right", colors = [
    "#B19EEF",
    "#5227FF"
], items = [], socialItems = [], displaySocials = true, displayItemNumbering = true, className, logoUrl = "/src/assets/logos/reactbits-gh-white.svg", menuButtonColor = "#fff", openMenuButtonColor = "#fff", changeMenuColorOnOpen = true, accentColor = "#5227FF", isFixed = false, closeOnClickAway = true, onMenuOpen, onMenuClose })=>{
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const openRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const preLayersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const preLayerElsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const plusHRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const plusVRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const iconRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textInnerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textWrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [textLines, setTextLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "Menu",
        "Close"
    ]);
    const openTlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const closeTweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const spinTweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textCycleAnimRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const colorTweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toggleBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const busyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const itemEntranceTweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "StaggeredMenu.useLayoutEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "StaggeredMenu.useLayoutEffect.ctx": ()=>{
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
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set([
                        panel,
                        ...preLayers
                    ], {
                        xPercent: offscreen
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(plusH, {
                        transformOrigin: "50% 50%",
                        rotate: 0
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(plusV, {
                        transformOrigin: "50% 50%",
                        rotate: 90
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(icon, {
                        rotate: 0,
                        transformOrigin: "50% 50%"
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(textInner, {
                        yPercent: 0
                    });
                    if (toggleBtnRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(toggleBtnRef.current, {
                        color: menuButtonColor
                    });
                }
            }["StaggeredMenu.useLayoutEffect.ctx"]);
            return ({
                "StaggeredMenu.useLayoutEffect": ()=>ctx.revert()
            })["StaggeredMenu.useLayoutEffect"];
        }
    }["StaggeredMenu.useLayoutEffect"], [
        menuButtonColor,
        position
    ]);
    const buildOpenTimeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[buildOpenTimeline]": ()=>{
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
            const layerStates = layers.map({
                "StaggeredMenu.useCallback[buildOpenTimeline].layerStates": (el)=>({
                        el,
                        start: Number(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].getProperty(el, "xPercent"))
                    })
            }["StaggeredMenu.useCallback[buildOpenTimeline].layerStates"]);
            const panelStart = Number(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].getProperty(panel, "xPercent"));
            if (itemEls.length) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(itemEls, {
                yPercent: 140,
                rotate: 10
            });
            if (numberEls.length) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(numberEls, {
                ["--sm-num-opacity"]: 0
            });
            if (socialTitle) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(socialTitle, {
                opacity: 0
            });
            if (socialLinks.length) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(socialLinks, {
                y: 25,
                opacity: 0
            });
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                paused: true
            });
            layerStates.forEach({
                "StaggeredMenu.useCallback[buildOpenTimeline]": (ls, i)=>{
                    tl.fromTo(ls.el, {
                        xPercent: ls.start
                    }, {
                        xPercent: 0,
                        duration: 0.5,
                        ease: "power4.out"
                    }, i * 0.07);
                }
            }["StaggeredMenu.useCallback[buildOpenTimeline]"]);
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
                        onComplete: {
                            "StaggeredMenu.useCallback[buildOpenTimeline]": ()=>{
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(socialLinks, {
                                    clearProps: "opacity"
                                });
                            }
                        }["StaggeredMenu.useCallback[buildOpenTimeline]"]
                    }, socialsStart + 0.04);
                }
            }
            openTlRef.current = tl;
            return tl;
        }
    }["StaggeredMenu.useCallback[buildOpenTimeline]"], [
        position
    ]);
    const playOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[playOpen]": ()=>{
            if (busyRef.current) return;
            busyRef.current = true;
            const tl = buildOpenTimeline();
            if (tl) {
                tl.eventCallback("onComplete", {
                    "StaggeredMenu.useCallback[playOpen]": ()=>{
                        busyRef.current = false;
                    }
                }["StaggeredMenu.useCallback[playOpen]"]);
                tl.play(0);
            } else {
                busyRef.current = false;
            }
        }
    }["StaggeredMenu.useCallback[playOpen]"], [
        buildOpenTimeline
    ]);
    const playClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[playClose]": ()=>{
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
            closeTweenRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(all, {
                xPercent: offscreen,
                duration: 0.32,
                ease: "power3.in",
                overwrite: "auto",
                onComplete: {
                    "StaggeredMenu.useCallback[playClose]": ()=>{
                        const itemEls = Array.from(panel.querySelectorAll(".sm-panel-itemLabel"));
                        if (itemEls.length) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(itemEls, {
                            yPercent: 140,
                            rotate: 10
                        });
                        const numberEls = Array.from(panel.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item"));
                        if (numberEls.length) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(numberEls, {
                            ["--sm-num-opacity"]: 0
                        });
                        const socialTitle = panel.querySelector(".sm-socials-title");
                        const socialLinks = Array.from(panel.querySelectorAll(".sm-socials-link"));
                        if (socialTitle) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(socialTitle, {
                            opacity: 0
                        });
                        if (socialLinks.length) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(socialLinks, {
                            y: 25,
                            opacity: 0
                        });
                        busyRef.current = false;
                    }
                }["StaggeredMenu.useCallback[playClose]"]
            });
        }
    }["StaggeredMenu.useCallback[playClose]"], [
        position
    ]);
    const animateIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[animateIcon]": (opening)=>{
            const icon = iconRef.current;
            const h = plusHRef.current;
            const v = plusVRef.current;
            if (!icon || !h || !v) return;
            spinTweenRef.current?.kill();
            if (opening) {
                // ensure container never rotates
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(icon, {
                    rotate: 0,
                    transformOrigin: "50% 50%"
                });
                spinTweenRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
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
                spinTweenRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
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
        }
    }["StaggeredMenu.useCallback[animateIcon]"], []);
    const animateColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[animateColor]": (opening)=>{
            const btn = toggleBtnRef.current;
            if (!btn) return;
            colorTweenRef.current?.kill();
            if (changeMenuColorOnOpen) {
                const targetColor = opening ? openMenuButtonColor : menuButtonColor;
                colorTweenRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(btn, {
                    color: targetColor,
                    delay: 0.18,
                    duration: 0.3,
                    ease: "power2.out"
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(btn, {
                    color: menuButtonColor
                });
            }
        }
    }["StaggeredMenu.useCallback[animateColor]"], [
        openMenuButtonColor,
        menuButtonColor,
        changeMenuColorOnOpen
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "StaggeredMenu.useEffect": ()=>{
            if (toggleBtnRef.current) {
                if (changeMenuColorOnOpen) {
                    const targetColor = openRef.current ? openMenuButtonColor : menuButtonColor;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(toggleBtnRef.current, {
                        color: targetColor
                    });
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(toggleBtnRef.current, {
                        color: menuButtonColor
                    });
                }
            }
        }
    }["StaggeredMenu.useEffect"], [
        changeMenuColorOnOpen,
        menuButtonColor,
        openMenuButtonColor
    ]);
    const animateText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[animateText]": (opening)=>{
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(inner, {
                yPercent: 0
            });
            const lineCount = seq.length;
            const finalShift = (lineCount - 1) / lineCount * 100;
            textCycleAnimRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(inner, {
                yPercent: -finalShift,
                duration: 0.5 + lineCount * 0.07,
                ease: "power4.out"
            });
        }
    }["StaggeredMenu.useCallback[animateText]"], []);
    const toggleMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[toggleMenu]": ()=>{
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
        }
    }["StaggeredMenu.useCallback[toggleMenu]"], [
        playOpen,
        playClose,
        animateIcon,
        animateColor,
        animateText,
        onMenuOpen,
        onMenuClose
    ]);
    const closeMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[closeMenu]": ()=>{
            if (openRef.current) {
                openRef.current = false;
                setOpen(false);
                onMenuClose?.();
                playClose();
                animateIcon(false);
                animateColor(false);
                animateText(false);
            }
        }
    }["StaggeredMenu.useCallback[closeMenu]"], [
        playClose,
        animateIcon,
        animateColor,
        animateText,
        onMenuClose
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "StaggeredMenu.useEffect": ()=>{
            if (!closeOnClickAway || !open) return;
            const handleClickOutside = {
                "StaggeredMenu.useEffect.handleClickOutside": (event)=>{
                    if (panelRef.current && !panelRef.current.contains(event.target) && toggleBtnRef.current && !toggleBtnRef.current.contains(event.target)) {
                        closeMenu();
                    }
                }
            }["StaggeredMenu.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "StaggeredMenu.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["StaggeredMenu.useEffect"];
        }
    }["StaggeredMenu.useEffect"], [
        closeOnClickAway,
        open,
        closeMenu
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `sm-scope  z-40 ${isFixed ? "fixed top-0 left-0 w-screen h-screen overflow-hidden" : "w-full h-full"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (className ? className + " " : "") + "staggered-menu-wrapper pointer-events-none relative w-full h-full z-40",
                style: accentColor ? {
                    ["--sm-accent"]: accentColor
                } : undefined,
                "data-position": position,
                "data-open": open || undefined,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            return arr.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm-prelayer absolute top-0 right-0 h-full w-full translate-x-0",
                                    style: {
                                        background: c
                                    }
                                }, i, false, {
                                    fileName: "[project]/components/StaggeredMenu.tsx",
                                    lineNumber: 473,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)));
                        })()
                    }, void 0, false, {
                        fileName: "[project]/components/StaggeredMenu.tsx",
                        lineNumber: 457,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "staggered-menu-header absolute top-0 left-0 w-full flex items-center justify-between p-[2em] bg-transparent pointer-events-none z-20",
                        "aria-label": "Main navigation header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sm-logo flex items-center select-none pointer-events-auto",
                                "aria-label": "Logo",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: logoUrl || "/src/assets/logos/reactbits-gh-white.svg",
                                    alt: "Logo",
                                    className: "sm-logo-img block h-8 w-auto object-contain",
                                    draggable: false,
                                    width: 110,
                                    height: 24
                                }, void 0, false, {
                                    fileName: "[project]/components/StaggeredMenu.tsx",
                                    lineNumber: 490,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/StaggeredMenu.tsx",
                                lineNumber: 486,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: toggleBtnRef,
                                className: `sm-toggle relative inline-flex items-center gap-[0.3rem] bg-transparent border-0 cursor-pointer font-medium leading-none overflow-visible pointer-events-auto ${open ? "text-black" : "text-[#e9e9ef]"}`,
                                "aria-label": open ? "Close menu" : "Open menu",
                                "aria-expanded": open,
                                "aria-controls": "staggered-menu-panel",
                                onClick: toggleMenu,
                                type: "button",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        ref: textWrapRef,
                                        className: "sm-toggle-textWrap relative inline-block h-[1em] overflow-hidden whitespace-nowrap w-(--sm-toggle-width,auto) min-w-(--sm-toggle-width,auto)",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            ref: textInnerRef,
                                            className: "sm-toggle-textInner flex flex-col leading-none",
                                            children: textLines.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sm-toggle-line block h-[1em] leading-none",
                                                    children: l
                                                }, i, false, {
                                                    fileName: "[project]/components/StaggeredMenu.tsx",
                                                    lineNumber: 521,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/StaggeredMenu.tsx",
                                            lineNumber: 516,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/StaggeredMenu.tsx",
                                        lineNumber: 511,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        ref: iconRef,
                                        className: "sm-icon relative w-3.5 h-3.5 shrink-0 inline-flex items-center justify-center will-change-transform",
                                        "aria-hidden": "true",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                ref: plusHRef,
                                                className: "sm-icon-line absolute left-1/2 top-1/2 w-full h-0.5 bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2 will-change-transform"
                                            }, void 0, false, {
                                                fileName: "[project]/components/StaggeredMenu.tsx",
                                                lineNumber: 536,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                ref: plusVRef,
                                                className: "sm-icon-line sm-icon-line-v absolute left-1/2 top-1/2 w-full h-0.5 bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2 will-change-transform"
                                            }, void 0, false, {
                                                fileName: "[project]/components/StaggeredMenu.tsx",
                                                lineNumber: 540,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/StaggeredMenu.tsx",
                                        lineNumber: 531,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/StaggeredMenu.tsx",
                                lineNumber: 500,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/StaggeredMenu.tsx",
                        lineNumber: 482,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        id: "staggered-menu-panel",
                        ref: panelRef,
                        className: "staggered-menu-panel absolute top-0 right-0 h-full bg-white flex flex-col p-[6em_2em_2em_2em] overflow-y-auto z-10 backdrop-blur-md pointer-events-auto",
                        style: {
                            WebkitBackdropFilter: "blur(12px)"
                        },
                        "aria-hidden": !open,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sm-panel-inner flex-1 flex flex-col gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "sm-panel-list list-none m-0 p-0 flex flex-col gap-2",
                                    role: "list",
                                    "data-numbering": displayItemNumbering || undefined,
                                    children: items && items.length ? items.map((it, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "sm-panel-itemWrap relative overflow-hidden leading-none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "sm-panel-item relative text-black font-semibold text-[4rem] cursor-pointer leading-none tracking-[-2px] uppercase transition-[background,color] duration-150 ease-linear inline-block no-underline pr-[1.4em]",
                                                href: it.link,
                                                "aria-label": it.ariaLabel,
                                                "data-index": idx + 1,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sm-panel-itemLabel inline-block origin-[50%_100%] will-change-transform",
                                                    children: it.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/StaggeredMenu.tsx",
                                                    lineNumber: 573,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/StaggeredMenu.tsx",
                                                lineNumber: 567,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, it.label + idx, false, {
                                            fileName: "[project]/components/StaggeredMenu.tsx",
                                            lineNumber: 563,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "sm-panel-itemWrap relative overflow-hidden leading-none",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sm-panel-item relative text-black font-semibold text-[4rem] cursor-pointer leading-none tracking-[-2px] uppercase transition-[background,color] duration-150 ease-linear inline-block no-underline pr-[1.4em]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sm-panel-itemLabel inline-block origin-[50%_100%] will-change-transform",
                                                children: "No items"
                                            }, void 0, false, {
                                                fileName: "[project]/components/StaggeredMenu.tsx",
                                                lineNumber: 585,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/StaggeredMenu.tsx",
                                            lineNumber: 584,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/StaggeredMenu.tsx",
                                        lineNumber: 580,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/StaggeredMenu.tsx",
                                    lineNumber: 556,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                displaySocials && socialItems && socialItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm-socials mt-auto pt-8 flex flex-col gap-3",
                                    "aria-label": "Social links",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "sm-socials-title m-0 text-base font-medium text-(--sm-accent,#ff0000)",
                                            children: "Socials"
                                        }, void 0, false, {
                                            fileName: "[project]/components/StaggeredMenu.tsx",
                                            lineNumber: 598,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "sm-socials-list list-none m-0 p-0 flex flex-row items-center gap-4 flex-wrap",
                                            role: "list",
                                            children: socialItems.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "sm-socials-item",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: s.link,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "sm-socials-link text-[1.2rem] font-medium text-[#111] no-underline relative inline-block py-0.5 transition-[color,opacity] duration-300 ease-linear",
                                                        children: s.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/StaggeredMenu.tsx",
                                                        lineNumber: 607,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, s.label + i, false, {
                                                    fileName: "[project]/components/StaggeredMenu.tsx",
                                                    lineNumber: 606,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/StaggeredMenu.tsx",
                                            lineNumber: 601,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/StaggeredMenu.tsx",
                                    lineNumber: 594,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/StaggeredMenu.tsx",
                            lineNumber: 555,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/StaggeredMenu.tsx",
                        lineNumber: 548,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/StaggeredMenu.tsx",
                lineNumber: 444,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
      
.sm-scope .staggered-menu-wrapper { position: relative; width: 100%; height: 100%; z-index: 40; pointer-events: none; }
.sm-scope .staggered-menu-header { position: absolute; top: 0; left: 0; width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 1em; background: transparent; pointer-events: none; z-index: 20; }
.sm-scope .staggered-menu-header > * { pointer-events: auto; }
.sm-scope .sm-logo { display: flex; align-items: center; user-select: none; }
.sm-scope .sm-logo-img { display: block; height: 43px; width: auto; object-fit: contain; }
.sm-scope .sm-toggle { position: relative; display: inline-flex; align-items: center; gap: 0.3rem; background: transparent; border: none; cursor: pointer; color: #e9e9ef; font-weight: 500; line-height: 1; overflow: visible; }
.sm-scope .sm-toggle:focus-visible { outline: 2px solid #ffffffaa; outline-offset: 4px; border-radius: 4px; }
.sm-scope .sm-line:last-of-type { margin-top: 6px; }
.sm-scope .sm-toggle-textWrap { position: relative; margin-right: 0.5em; display: inline-block; height: 1em; overflow: hidden; white-space: nowrap; width: var(--sm-toggle-width, auto); min-width: var(--sm-toggle-width, auto); }
.sm-scope .sm-toggle-textInner { display: flex; flex-direction: column; line-height: 1; }
.sm-scope .sm-toggle-line { display: block; height: 1em; line-height: 1; }
.sm-scope .sm-icon { position: relative; width: 14px; height: 14px; flex: 0 0 14px; display: inline-flex; align-items: center; justify-content: center; will-change: transform; }
.sm-scope .sm-panel-itemWrap { position: relative; overflow: hidden; line-height: 1; }
.sm-scope .sm-icon-line { position: absolute; left: 50%; top: 50%; width: 100%; height: 2px; background: currentColor; border-radius: 2px; transform: translate(-50%, -50%); will-change: transform; }
.sm-scope .sm-line { display: none !important; }
.sm-scope .staggered-menu-panel { position: absolute; top: 0; right: 0; width: clamp(260px, 38vw, 420px); height: 100%; background: transparent !important; backdrop-filter: none; -webkit-backdrop-filter: none; display: flex; flex-direction: column; padding: 6em 2em 2em 2em; overflow-y: auto; z-index: 10; }
.sm-scope [data-position='left'] .staggered-menu-panel { right: auto; left: 0; }
.sm-scope .sm-prelayers { position: absolute; top: 0; right: 0; bottom: 0; width: clamp(260px, 38vw, 420px); pointer-events: none; z-index: 5; }
.sm-scope [data-position='left'] .sm-prelayers { right: auto; left: 0; }
.sm-scope .sm-prelayer { position: absolute; top: 0; right: 0; height: 100%; width: 100%; transform: translateX(0); }
.sm-scope .sm-panel-inner { flex: 1; display: flex; flex-direction: column; gap: 1.25rem; }
.sm-scope .sm-socials { margin-top: auto; padding-top: 2rem; display: flex; flex-direction: column; gap: 0.75rem; }
.sm-scope .sm-socials-title { margin: 0; font-size: 1rem; font-weight: 500; color: var(--sm-accent, #ff0000); }
.sm-scope .sm-socials-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: row; align-items: center; gap: 1rem; flex-wrap: wrap; }
.sm-scope .sm-socials-list .sm-socials-link { opacity: 1; transition: opacity 0.3s ease; }
.sm-scope .sm-socials-list:hover .sm-socials-link:not(:hover) { opacity: 0.35; }
.sm-scope .sm-socials-list:focus-within .sm-socials-link:not(:focus-visible) { opacity: 0.35; }
.sm-scope .sm-socials-list .sm-socials-link:hover,
.sm-scope .sm-socials-list .sm-socials-link:focus-visible { opacity: 1; }
.sm-scope .sm-socials-link:focus-visible { outline: 2px solid var(--sm-accent, #ff0000); outline-offset: 3px; }
.sm-scope .sm-socials-link { font-size: 1.2rem; font-weight: 500; color: #fff; text-decoration: none; position: relative; padding: 2px 0; display: inline-block; transition: color 0.3s ease, opacity 0.3s ease; }
.sm-scope .sm-socials-link:hover { color: #2eb4fc; }
.sm-scope .sm-panel-title { margin: 0; font-size: 1rem; font-weight: 600; color: #fff; text-transform: uppercase; }
.sm-scope .sm-panel-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; }
.sm-scope .sm-panel-item { position: relative; color: #fff; font-weight: 600; font-size: 4rem; cursor: pointer; line-height: 1; letter-spacing: -2px; text-transform: uppercase; transition: background 0.25s, color 0.25s; display: inline-block; text-decoration: none; padding-right: 1.4em; }
.sm-scope .sm-panel-itemLabel { display: inline-block; will-change: transform; transform-origin: 50% 100%; }
.sm-scope .sm-panel-item:hover { color: #2eb4fc; }
.sm-scope .sm-panel-list[data-numbering] { counter-reset: smItem; }
.sm-scope .sm-panel-list[data-numbering] .sm-panel-item::after { counter-increment: smItem; content: counter(smItem, decimal-leading-zero); position: absolute; top: 0.1em; right: 3.2em; font-size: 18px; font-weight: 400; color: var(--sm-accent, #ff0000); letter-spacing: 0; pointer-events: none; user-select: none; opacity: var(--sm-num-opacity, 0); }
@media (max-width: 1024px) { .sm-scope .staggered-menu-panel { width: 100%; left: 0; right: 0; } .sm-scope .staggered-menu-wrapper[data-open] .sm-logo-img { filter: invert(100%); } }
@media (max-width: 640px) { .sm-scope .staggered-menu-panel { width: 100%; left: 0; right: 0; } .sm-scope .staggered-menu-wrapper[data-open] .sm-logo-img { filter: invert(100%); } }
      `
            }, void 0, false, {
                fileName: "[project]/components/StaggeredMenu.tsx",
                lineNumber: 624,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/StaggeredMenu.tsx",
        lineNumber: 441,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StaggeredMenu, "EIUA9da8Z4hGFKXdpDkdw0KEars=");
_c = StaggeredMenu;
const __TURBOPACK__default__export__ = StaggeredMenu;
var _c;
__turbopack_context__.k.register(_c, "StaggeredMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Menu",
    ()=>Menu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StaggeredMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/StaggeredMenu.tsx [app-client] (ecmascript)");
"use client";
;
;
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
const Menu = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: "100vh",
            background: "#1a1a1a"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StaggeredMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaggeredMenu"], {
            position: "right",
            items: menuItems,
            socialItems: socialItems,
            displaySocials: true,
            displayItemNumbering: true,
            menuButtonColor: "background",
            openMenuButtonColor: "background",
            changeMenuColorOnOpen: true,
            colors: [
                "#35c9fb",
                "#006eff"
            ],
            logoUrl: "/BODON-white.png",
            accentColor: "#background",
            isFixed: true,
            onMenuOpen: ()=>console.log("Menu opened"),
            onMenuClose: ()=>console.log("Menu closed")
        }, void 0, false, {
            fileName: "[project]/components/Menu.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Menu;
var _c;
__turbopack_context__.k.register(_c, "Menu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Iridescence.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Iridescence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Renderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Program.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/math/Color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/extras/Triangle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;
const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;
uniform vec2 uMouse;
uniform float uAmplitude;
uniform float uSpeed;

varying vec2 vUv;

void main() {
  float mr = min(uResolution.x, uResolution.y);
  vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;

  uv += (uMouse - vec2(0.5)) * uAmplitude;

  float d = -uTime * 0.5 * uSpeed;
  float a = 0.0;
  for (float i = 0.0; i < 8.0; ++i) {
    a += cos(i - d - a * uv.x);
    d += sin(uv.y * i + a);
  }
  d += uTime * 0.5 * uSpeed;
  vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
  col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5) * uColor;
  gl_FragColor = vec4(col, 1.0);
}
`;
function Iridescence({ color = [
    1,
    1,
    1
], speed = 1.0, amplitude = 0.1, mouseReact = true, ...rest }) {
    _s();
    const ctnDom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mousePos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0.5,
        y: 0.5
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Iridescence.useEffect": ()=>{
            if (!ctnDom.current) return;
            const ctn = ctnDom.current;
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Renderer"]();
            const gl = renderer.gl;
            gl.clearColor(1, 1, 1, 1);
            let program;
            function resize() {
                const scale = 1;
                renderer.setSize(ctn.offsetWidth * scale, ctn.offsetHeight * scale);
                if (program) {
                    program.uniforms.uResolution.value = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height);
                }
            }
            window.addEventListener("resize", resize, false);
            resize();
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Triangle"](gl);
            program = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Program"](gl, {
                vertex: vertexShader,
                fragment: fragmentShader,
                uniforms: {
                    uTime: {
                        value: 0
                    },
                    uColor: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](...color)
                    },
                    uResolution: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height)
                    },
                    uMouse: {
                        value: new Float32Array([
                            mousePos.current.x,
                            mousePos.current.y
                        ])
                    },
                    uAmplitude: {
                        value: amplitude
                    },
                    uSpeed: {
                        value: speed
                    }
                }
            });
            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](gl, {
                geometry,
                program
            });
            let animateId;
            function update(t) {
                animateId = requestAnimationFrame(update);
                program.uniforms.uTime.value = t * 0.001;
                renderer.render({
                    scene: mesh
                });
            }
            animateId = requestAnimationFrame(update);
            ctn.appendChild(gl.canvas);
            function handleMouseMove(e) {
                const rect = ctn.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = 1.0 - (e.clientY - rect.top) / rect.height;
                mousePos.current = {
                    x,
                    y
                };
                program.uniforms.uMouse.value[0] = x;
                program.uniforms.uMouse.value[1] = y;
            }
            if (mouseReact) {
                ctn.addEventListener("mousemove", handleMouseMove);
            }
            return ({
                "Iridescence.useEffect": ()=>{
                    cancelAnimationFrame(animateId);
                    window.removeEventListener("resize", resize);
                    if (mouseReact) {
                        ctn.removeEventListener("mousemove", handleMouseMove);
                    }
                    ctn.removeChild(gl.canvas);
                    gl.getExtension("WEBGL_lose_context")?.loseContext();
                }
            })["Iridescence.useEffect"];
        }
    }["Iridescence.useEffect"], [
        color,
        speed,
        amplitude,
        mouseReact
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ctnDom,
        className: "w-full h-full",
        ...rest
    }, void 0, false, {
        fileName: "[project]/components/Iridescence.tsx",
        lineNumber: 144,
        columnNumber: 10
    }, this);
}
_s(Iridescence, "4UT6OpJuIbbu8O/myXPXcGW257A=");
_c = Iridescence;
var _c;
__turbopack_context__.k.register(_c, "Iridescence");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_09cf8e16._.js.map