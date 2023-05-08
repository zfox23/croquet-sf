// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = [
        "newwhite"
    ];

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "csmLights.js", "bouncingBall.js", "bitcoinTracker.js", "spin.js", "openPortal.js", "urlLink.js", "pool.js", "video.js"
    ];

    Constants.ExcludedSystemBehaviorModules = ["gizmo.js"];
    Constants.IncludedSystemBehaviorModules = ["pedestal.js"];

    const frameColor = 0x888888;

    Constants.DefaultCards = [
        {
            card: {
                name: "entrance",
                type: "object",
                // match position of portal opened below
                translation: [-12, -0.4, -10.82],
                rotation: [0, -1.97, 0],
                spawn: "default",
            }
        },
        {
            card: {
                name: "world model",
                type: "3d",
                fileName: "/artgallery_pool.glb",
                dataLocation: "./assets/3D/artgallery_pool.glb",
                singleSided: true,
                shadow: true,
                layers: ["walk"],
                translation: [0, -1.676, 0],
                dataScale: [1, 1, 1],

                placeholder: true,
                placeholderSize: [400, 0.1, 400],
                placeholderColor: 0x808080,
                placeholderOffset: [0, 0, 0],
            }
        },
        {
            card: {
                name: "pool",
                type: "object",
                translation: [-2.5, -1.6, -5.5],
                layers: ["pointer", "walk"],
                behaviorModules: ["Pool"],
                poolSize: [5.6, 5.6],
            }
        },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light"],
                fileName: "realistic_mostly_sunny_skies.jpg",
                dataLocation: "3RcFeEH1AvTIYHmFIOBBXg8qmGwAH8rFnI-rNQKIszjIOiYmIiFofX00Oz43IXwnIXwxID0jJzcmfDs9fSd9BRcxMwUmFz8aFTZqBQQcChArBjMxHzEiAhw2YH07PXwxID0jJzcmfCI9ICYzPnwnIj49MzZ9IiI1KAAbJwZmGwAfIhQcZTcxBR01JwAVAgY8BQY1MRQmMAhhKiVhKAtjZn02MyYzfTthED0fMTkrNGE9IyUwJBg8Zz4nHQQAFQArHjEnax05ah8jJBU6MWs0ZTE",                
                dataType: "jpg",
            }
        },
        {
            card: {
                name: "portal button",
                translation: [-12.1, 1.3, -10.82],
                behaviorModules: ["OpenPortalButton"],
                type: "object",
                // entrance card should match this position
                openPortalTranslation: [-12.1, -0.4, -10.82],
                openPortalRotation: [0, -Math.PI / 2, 0],
                openPortalWidth: 1.8,
                openPortalHeight: 2.4,
                openPortalPath: "?world=factory",
            }
        },
        {
            card: { // slot 1
                name: "V-agent-recruiting-booklet-print.pdf",
                translation: [6.8, 1.35, -10.25],
                scale: [5, 5, 5],
                rotation: [0, -Math.PI / 2, 0],
                layers: ["pointer"],
                behaviorModules: ["PDFView"],
                color: 8947848,
                depth: 0.05,
                frameColor: 16777215,
                fullBright: true,
                modelType: "pdf",
                pdfLocation: "3txYK2LIq1L7OdCeHI052JQcNKZ0JAN2GNJrhpvrbQU0HAAABAdOW1sSHRgRB1oBB1oXBhsFAREAWh0bWwFbIzEXFSMAMRk8MxBMIyI6LDYNIBUXORcEJDoQRlsdG1oXBhsFAREAWgQbBgAVGFoBBBgbFRBbBAQTDiY9ASBAPSY5BDI6QxEXIzsTASYzJCAaIyATFzIAFi5HDANHDi1FQFsQFQAVWwFEABknLhZHExwFPh0OExItIhYzQAwCJkE1AyUhER4CHlkQJyAbTSA7MAc",
                shadow: true,
                singleSided: true,
                type: "2d",
            }
        },
        {
            card: { // slot 2
                name: "Croquet Video 1",
                translation: [6.8, 1.35, 0],
                scale: [5, 5, 5],
                rotation: [0, -Math.PI / 2, 0],
                layers: ["pointer"],
                behaviorModules: ["VideoPlayer"],
                color: 8947848,
                depth: 0.025,
                frameColor: 16777215,
                fullBright: true,
                textureType: "video",
                textureLocation: "./assets/videos/state farm dunk.mp4",
                shadow: true,
                singleSided: true,
                type: "2d",
            }
        },
        {
            card: { // slot 3
                name: "State Farm Logo",
                translation: [1.75, 1.25, 5.75],
                rotation: [0, -1, 0, 0],
                layers: ["pointer"],
                scale: [5, 5, 5],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/STATE FARM LOGO.png",
                cardURL: "https://www.statefarm.com/",
                behaviorModules: ["URLLink"],
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xffffff,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },
        {
            card: { // slot 4
                name: "State Farm Logo",
                translation: [-6.5, 1.25, 5.75],
                rotation: [0, Math.PI, 0],
                layers: ["pointer"],
                scale: [5, 5, 5],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/STATE FARM LOGO.png",
                cardURL: "https://www.statefarm.com/",
                behaviorModules: ["URLLink"],
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xffffff,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },
        {
            card: { // slot 5
                name: "image card",
                translation: [-12, 0.8, 0.1],
                scale: [4, 4, 4],
                rotation: [0, Math.PI / 2, 0],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/CroquetLogo_RGB.jpg",
                cardURL: "https://croquet.io",
                behaviorModules: ["URLLink"],
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xbbbbbb,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },
        {
            card: { // 3d model
                name: "auggie award",
                translation: [-10.9, -1.875, 4],
                rotation: [0, -0.9629921455836804, 0, -0.2695294558005481],
                layers: ["pointer"],
                dataLocation: "35hI1OQ1NaqWki0Or-uHXAVM9vipZGVZIc_emQwLfCAcXUFBRUYPGhpTXFlQRhtARhtWR1pEQFBBG1xaGkAaT2BBQmV6T3NAemYEflxSeG9cAAYMTXNxcg0FBxpcWhtWR1pEQFBBG1hcVkdaQ1BHRlAbQ1RbUEZGVBpebAd3ZwBkYVEEZVICWAB7YkdiYm9xc09BXHNRcE1qf3hEdlZEfFFzRGAFGlFUQVQabV1-bFdNZAdnBAxCfnAYXk9kamVaAUVbBnt3QUBaWwUEfnhPb1RWfhhqDQ",
                dataScale: [4, 4, 4],
                dataTranslation: [0.1, 0, -0.5],
                fileName: "/Auggie2.glb",
                modelType: "glb",
                license: "CC-BY",
                attribution: "'Auggie Awards Trophy AWE 2022' by Kai Oldman derived from 'Auggie Awards Trophy AWE 2021' (https://skfb.ly/otrIP) by oriinbar is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).",
                shadow: true,
                singleSided: true,
                type: "3d",
                behaviorModules: ["Spin"],
            }
        },
        {
            card: { // slot 6
                name: "bitcointracker",
                translation: [-6.8, 1.35, -16.87],
                rotation: [0, 0, 0],
                scale: [5, 5, 5],
                type: "2d",
                textureType: "canvas",
                textureWidth: 1024,
                textureHeight: 768,
                width: 1,
                height: 0.75,
                frameColor: frameColor,
                // color: 0xffffff,
                depth: 0.05,
                cornerRadius: 0.1,
                behaviorModules: ["Elected", "BitcoinTracker"],
            },
            id: "main",
        },
        {
            card: {
                name: "bitlogo",
                translation: [-0.35, 0.35, 0.1],
                scale: [0.25, 0.25, 0.25],
                parent: "main",
                type: "2d",
                fileName: "BitcoinSign.svg",
                dataLocation: "3N4qGVniVE2vDgL1m_b7BLvYMZP0LHvOv8wTRxL1nv1wJjo6Pj10YWEoJyIrPWA7PWAtPCE_Oys6YCchYTthCSoYLDciBz0PJR8tDBYqfQk2Lzg3ORsFGRcXfGEnIWAtPCE_Oys6YCMnLTwhOCs8PSthLT9jIn4je3speQcKKQQLCgoNfgwnKTY3Y30oAyUJG3oGO3k-CX4ZdyUKF2EqLzovYTx3AAgWARoHHQsUHiU9An0NenstIB0FNwc6Axl-PgJ-JHo9fTgpHSsIABs",
                depth: 0.05,
                color: 0xffffff,
                frameColor: frameColor,
                behaviorModules: ["BitLogo"]
            }
        },
        {
            card: {
                name: "bar graph",
                translation: [0, -0.3, 0.1],
                color: 0xEEEEEE,
                frameColor: frameColor,
                type: "object",
                height: 0.4,
                parent: "main",
                behaviorModules: ["BarGraph"],
            }
        },
        {
            card: { // slot 7
                name: "bouncinglogo",
                translation: [1.75, 1.35, -16.87],
                scale: [3, 3, 3],
                rotation: [0, 0, 0],
                behaviorModules: ["BouncingBall"],
                scale: [3, 3, 3],
                width: 1,
                height: 1,
                layers: ["pointer"],
                type: "2d",
                dataLocation: "./assets/SVG/full-circle.svg",
                textureType: "dynamic",
                textureWidth: 1024,
                textureHeight: 1024,
                frameColor: frameColor,
                color: 0xffffff,
                depth: 0.05,
                fullBright: true,
            }
        },
    ];
}
