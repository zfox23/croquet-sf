// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = [
        "newwhite"
    ];

    Constants.UserBehaviorDirectory = "behaviors/factory";
    Constants.UserBehaviorModules = [
        "csmLights.js", "crane.js", "forklift.js", "circle.js", "cascade.js", "earth.js", "box.js", "drone.js", "spin.js", "flightTracker.js", "rearrange.js"
    ];

    // Constants.ExcludedSystemBehaviorModules = ["gizmo.js"];
    // Constants.IncludedSystemBehaviorModules = ["pedestal.js"];

    Constants.DefaultCards = [
        {
            card: {
                name: "world model",
                layers: ["walk"],
                translation: [-0, -5.234552517024578, -0],
                dataLocation: "3aYc3x5t4SYnR8YZ1sJDJbZ3benvkwy8T_h3sZivNV_ACRUVERJbTk4HCA0EEk8UEk8CEw4QFAQVTwgOThROJgU3AxgNKBIgCjACIzkFUiYZABcYFjQqNjg4U04IDk8CEw4QFAQVTwwIAhMOFwQTEgRODiQxEgYtIjsRFhI7GyZTAhc0JSU0AA4pCiYiCQsDCTg7FiMnFzRYFkwCJE4FABUAThYsEQwPVgMrVCIuKkxYKS8DJVQnLRsvAABYJS1SWSVXOVkVBgNQCyU3LzQ",
                fileName: "/Factory5.glb",
                dataScale: [1.2, 1.2, 1.2],
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
                placeholder: true,
                placeholderSize: [400, 14, 400],
                placeholderColor: 0x808080,
                placeholderOffset: [0, 0, 0],
            }
        },
        {
            card: {
                translation: [50.632411510320324, 9.053924450189605, 16.130420037001542],
                scale: [9.424575578464411, 9.424575578464411, 9.424575578464411],
                rotation: [0, -0.7065943712210524, 0, 0.7076188200993],
                layers: ["pointer"],
                name: "/STATE FARM LOGO.png",
                cornerRadius: 0.02,
                fileName: "/STATE FARM LOGO.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "3GM4vErv_TH2WcZ18yECXgeSacckXfkRgPbeMBhcx8kMLzMzNzR9aGghLisiNGkyNGkkNSg2MiIzaS4oaDJoPRIzMBcIPQEyCBR2DC4gCh0ucnR-PwEDAH93dWguKGkkNSg2MiIzaSouJDUoMSI1NCJpKygkJisjIjEjIiEmMiszaAl3IyERIQkTBAoTFhMLcSoPdgomCwE-Nw4lJQ89ICwiHxdwNXEpKBYxKyxoIyYzJmgfCAwDJTY9DQ4xAxhxDT8ddSQdFCA2IQUhHTcpHS8xFyMMHXR0agowACAW",
                textureType: "image",
                type: "2d",
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
                name: "crane",
                type: "object",
                translation: [-1.4447057496318962, -5.504611090090481, 30.282952880859376],
                behaviorModules: ["Crane"],
                layers: ["pointer"],
                shadow: true,
                scale: [0.4, 0.4, 0.4],
            }
        },
        {
            card: {
                name: "crane button 1",
                type: "object",
                translation: [3.816793504629362, 4.336223779145266, 30.294897079467775], // [7.770442246960653, 1.7540892281749288, 13.950883253194933],
                rotation: [0, 0, Math.PI],
                craneSpeed: -0.0010,
                behaviorModules: ["CraneButton"],
                shadow: true,
                myScope: "A",
            }
        },
        {
            card: {
                name: "crane button 2",
                type: "object",
                translation: [3.816793504629362, 4.436223779145266, 30.294897079467775],
                rotation: [0, 0, 0],
                craneSpeed: 0.0010,
                behaviorModules: ["CraneButton"],
                shadow: true,
                myScope: "A",
            }
        },
        {
            card: {
                name: "crane explanation",
                className: "TextFieldActor",
                translation: [5.875421017365224, 4.38622377915, 30.394897079467775],
                rotation: [0, 0, 0],
                depth: 0.10,
                type: "text",
                runs: [{ text: "Lateral Crane Controller" }],
                margins: { left: 15, top: 48, right: 10, bottom: 0 },
                backgroundColor: 0x707070,
                color: 0xB0841B,
                frameColor: 0x222222,
                width: 3.4,
                height: 1,
                textScale: 0.007,
                shadow: true,
                fullbright: true,
                noDismissButton: true,
            }
        },
        {
            card: {
                name: "forklift 1",
                dataTranslation: [0, -1.6, 0],
                translation: [37.64344906612852, 0, -20.223492416172753],
                dataScale: [1.2, 1.2, 1.2],
                behaviorModules: ["ForkLift"],
                layers: ["pointer"],
                dataLocation: "3UkowQroW_SGvJ0N4hXnZO_pwIEEVlVQNTvj8CJ0CG78PSEhJSZvenozPDkwJnsgJns2JzokIDAhezw6eiB6EjEDNyw5HCYUPgQ2Fw0xZhItNCMsIgAeAgwMZ3o8Ons2JzokIDAhezg8Nic6IzAnJjB6YBAAGSIZES8PHCcNBAVhIhlkbScSITQYHhliDR8SNy0DFz8gFAo7PAcTPnoxNCE0enhkF3gzEjxsDQYaIhwTYDsfGjkHMz84OCMTCjcjPzIfF3gkNzYgEyUtGzI",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            }
        },
        {
            card: {
                name: "forklift 2",
                dataTranslation: [0, -0.2, 0],
                translation: [-6.864045029864473, 0, -6.132494653566097],
                dataScale: [1.2, 1.2, 1.2],
                behaviorModules: ["ForkLift"],
                layers: ["pointer"],
                dataLocation: "3UkowQroW_SGvJ0N4hXnZO_pwIEEVlVQNTvj8CJ0CG78PSEhJSZvenozPDkwJnsgJns2JzokIDAhezw6eiB6EjEDNyw5HCYUPgQ2Fw0xZhItNCMsIgAeAgwMZ3o8Ons2JzokIDAhezg8Nic6IzAnJjB6YBAAGSIZES8PHCcNBAVhIhlkbScSITQYHhliDR8SNy0DFz8gFAo7PAcTPnoxNCE0enhkF3gzEjxsDQYaIhwTYDsfGjkHMz84OCMTCjcjPzIfF3gkNzYgEyUtGzI",
                pathIndex: 1,
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            }
        },
        {
            card: {
                name: "converyor box 1",
                dataTranslation: [0, 0.7508889919233228, 0],
                translation: [22.96199715067616, 0, 30.90992622375488],
                rotation: [0, Math.PI / 2, 0],
                dataScale: [1.2, 1.2, 1.2],
                behaviorModules: ["ConveyorBox"],
                layers: ["pointer"],
                dataLocation: "3gnL5YhR7iiXlN_3akKO1X_IZO-h3cMyjiA79HWPAlBQDxMTFxRdSEgBDgsCFEkSFEkEFQgWEgITSQ4ISBJIJD8vLQEjKAoSLgEOIj4ICCk-EDcxHigFDFcBVUgECApJAh8GChcLAkkTFQIRCBVJCh4KDgQVCBECFRQCSAURXysuMzACDVAsXjEJUh0CBTAdNgEjFD4SPwpRNxY0CyskLxMhUwBWKT5IAwYTBkhQHSkWBBUmETEBHgI4MzcRLjMDMR0kLjJTJDgJNTQXHz0CLSYpDgssBgoM",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
                startCount: 0,
            }
        },
        {
            card: {
                name: "converyor box 2",
                dataTranslation: [0, 0.7508889919233228, 0],
                translation: [22.96199715067616, 0, 30.90992622375488],
                rotation: [0, Math.PI / 2, 0],
                dataScale: [1.2, 1.2, 1.2],
                behaviorModules: ["ConveyorBox"],
                layers: ["pointer"],
                dataLocation: "3gnL5YhR7iiXlN_3akKO1X_IZO-h3cMyjiA79HWPAlBQDxMTFxRdSEgBDgsCFEkSFEkEFQgWEgITSQ4ISBJIJD8vLQEjKAoSLgEOIj4ICCk-EDcxHigFDFcBVUgECApJAh8GChcLAkkTFQIRCBVJCh4KDgQVCBECFRQCSAURXysuMzACDVAsXjEJUh0CBTAdNgEjFD4SPwpRNxY0CyskLxMhUwBWKT5IAwYTBkhQHSkWBBUmETEBHgI4MzcRLjMDMR0kLjJTJDgJNTQXHz0CLSYpDgssBgoM",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
                startCount: -150,
            }
        },
        {
            card: {
                name: "converyor box 3",
                dataTranslation: [0, 0.7508889919233228, 0],
                translation: [22.96199715067616, 0, 30.90992622375488],
                rotation: [0, Math.PI / 2, 0],
                dataScale: [1.2, 1.2, 1.2],
                behaviorModules: ["ConveyorBox"],
                layers: ["pointer"],
                dataLocation: "3gnL5YhR7iiXlN_3akKO1X_IZO-h3cMyjiA79HWPAlBQDxMTFxRdSEgBDgsCFEkSFEkEFQgWEgITSQ4ISBJIJD8vLQEjKAoSLgEOIj4ICCk-EDcxHigFDFcBVUgECApJAh8GChcLAkkTFQIRCBVJCh4KDgQVCBECFRQCSAURXysuMzACDVAsXjEJUh0CBTAdNgEjFD4SPwpRNxY0CyskLxMhUwBWKT5IAwYTBkhQHSkWBBUmETEBHgI4MzcRLjMDMR0kLjJTJDgJNTQXHz0CLSYpDgssBgoM",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
                startCount: -300,
            }
        },
        {
            card: {
                name: "converyor box 4",
                dataTranslation: [0, 0.7508889919233228, 0],
                translation: [22.96199715067616, 0, 30.90992622375488],
                rotation: [0, Math.PI / 2, 0],
                dataScale: [1.2, 1.2, 1.2],
                behaviorModules: ["ConveyorBox"],
                layers: ["pointer"],
                dataLocation: "3gnL5YhR7iiXlN_3akKO1X_IZO-h3cMyjiA79HWPAlBQDxMTFxRdSEgBDgsCFEkSFEkEFQgWEgITSQ4ISBJIJD8vLQEjKAoSLgEOIj4ICCk-EDcxHigFDFcBVUgECApJAh8GChcLAkkTFQIRCBVJCh4KDgQVCBECFRQCSAURXysuMzACDVAsXjEJUh0CBTAdNgEjFD4SPwpRNxY0CyskLxMhUwBWKT5IAwYTBkhQHSkWBBUmETEBHgI4MzcRLjMDMR0kLjJTJDgJNTQXHz0CLSYpDgssBgoM",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
                startCount: -450,
            }
        },
        {
            card: {
                name: "converyor box 5",
                dataTranslation: [0, 0.7508889919233228, 0],
                translation: [22.96199715067616, 0, 30.90992622375488],
                rotation: [0, Math.PI / 2, 0],
                dataScale: [1.2, 1.2, 1.2],
                behaviorModules: ["ConveyorBox"],
                layers: ["pointer"],
                dataLocation: "3gnL5YhR7iiXlN_3akKO1X_IZO-h3cMyjiA79HWPAlBQDxMTFxRdSEgBDgsCFEkSFEkEFQgWEgITSQ4ISBJIJD8vLQEjKAoSLgEOIj4ICCk-EDcxHigFDFcBVUgECApJAh8GChcLAkkTFQIRCBVJCh4KDgQVCBECFRQCSAURXysuMzACDVAsXjEJUh0CBTAdNgEjFD4SPwpRNxY0CyskLxMhUwBWKT5IAwYTBkhQHSkWBBUmETEBHgI4MzcRLjMDMR0kLjJTJDgJNTQXHz0CLSYpDgssBgoM",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
                startCount: -600,
            }
        },
        {
            card: {
                name: "converyor box 6",
                dataTranslation: [0, 0.7508889919233228, 0],
                translation: [22.96199715067616, 0, 30.90992622375488],
                rotation: [0, Math.PI / 2, 0],
                dataScale: [1.2, 1.2, 1.2],
                behaviorModules: ["ConveyorBox"],
                layers: ["pointer"],
                dataLocation: "3gnL5YhR7iiXlN_3akKO1X_IZO-h3cMyjiA79HWPAlBQDxMTFxRdSEgBDgsCFEkSFEkEFQgWEgITSQ4ISBJIJD8vLQEjKAoSLgEOIj4ICCk-EDcxHigFDFcBVUgECApJAh8GChcLAkkTFQIRCBVJCh4KDgQVCBECFRQCSAURXysuMzACDVAsXjEJUh0CBTAdNgEjFD4SPwpRNxY0CyskLxMhUwBWKT5IAwYTBkhQHSkWBBUmETEBHgI4MzcRLjMDMR0kLjJTJDgJNTQXHz0CLSYpDgssBgoM",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
                startCount: -750,
            }
        },
        {
            card: {
                name: "drone assembly 1",
                layers: ["pointer"],
                translation: [53.48163857202977, 7.270324118143472, 30.903151540772612], // translation: [50.709776263247214, 7.270324118143472, 25.427818377798733],
                rotation: [0, -Math.PI / 2, 0],
                dataScale: [1.6, 1.6, 1.6],
                dataLocation: "3GoJXGTqvuBdqaRBcIHp0qF_hCs14s_uw54cQONX7Nm0LzMzNzR9aGghLisiNGkyNGkkNSg2MiIzaS4oaDJoBB8PDSEDCCoyDiEuAh4oKAkeMBcRPgglLHchdWgkKCppIj8mKjcrImkzNSIxKDVpKj4qLiQ1KDEiNTQiaA90MhZ-JAt-PRNyPjMKIhI2KQYWLQMMDhATKA8QIQkXKQsQHxFwCSoQNw5oIyYzJmgDfgQhFXd_cDN-EwMOEiIuKxQKMHIPEj8yJi8Vdj8SFDErLiMJMCgODS4g",
                behaviorModules: ["DroneAssembly"],
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
                createDrones: true,
            }
        },
        {
            card: {
                name: "drone 1",
                layers: ["pointer"],
                translation: [29.98324916423906, 5.8493976701245005, 19.322983040470806],
                dataLocation: "34pr_19cAfzFXB4LkrXhn89DI5lfytFu969JGoTaI-2UXEBAREcOGxtSXVhRRxpBRxpXRltFQVFAGl1bG0Ebc1BiVk1YfUd1X2VXdmxQB3NMVUJNQ2F_Y21tBhtdWxpXRltFQVFAGlldV0ZbQlFGR1EbfmJ2RUNsZXh_e1puRARtRlV5cnFFWQBRWE1rXG13RlpuAAx9AFJsQQd8RxtQVUBVG0B4BlFNRnUERXBjREVARVtGQWxzUnxkR3hnd31cBQZNUEdMX3ZTQlFZAAQ",
                fileName: "/Drone2.glb",
                dataScale: [1.2, 1.2, 1.2],
                dataRotation: [0, Math.PI / 2, 0],
                behaviorModules: ["Circle"],
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            }
        },
        {
            card: {
                translation: [29.98324916423906, -0.29719731608024436, 19.322983040470806],
                scale: [2.5376082614037085, 2.5376082614037085, 2.5376082614037085],
                rotation: [0, -0.9449355667745359, 0, -0.32725643560438383],
                layers: ["pointer"],
                name: "/red_renault_small.glb",
                dataLocation: "3YLpKuaQMxvlh-AhKuxon6ynM6tliBmGZmXhbiEal25gMS0tKSpjdnY_MDU8KncsKnc6KzYoLDwtdzA2dix2IwwtLgkWIx8sFgpoEjA-FAMwbGpgIR8dHmFpa3YwNnc6KzYoLDwtdzQwOis2LzwrKjx3NTY6ODU9PC89PD84LDUtdj8pEi8QNDcjNxIBNDhtGwEMMwYdPzEQDCEXLnRrNwsDNzI-Kx1vFAASaWl2PTgtOHY2bDwjOmsfFS47dAs9GAM9Dx0GLAAKAQ1oODIQMxYTaTU4ahUbITgfFwku",
                dataScale: [0.05598228142427699, 0.05598228142427699, 0.05598228142427699],
                fileName: "/red_renault_small.glb",
                modelType: "glb",
                singleSided: true,
                type: "3d",
            }
        },
        {
            card: {
                name: "cascade",
                translation: [13.096899862946268, 1.7, 17.421859492871423],
                rotation: [0, Math.PI / 2, 0],
                behaviorModules: ["CascadeBox"],
                type: "object"
            }
        },
        {
            card: {
                translation: [51.91000213623047, 5.175040227971613, -28.295106048051267],
                scale: [3.3, 3.3, 3.3],
                rotation: [0, -Math.PI / 2, 0],
                layers: ["pointer"],
                behaviorModules: ["PDFView"],
                color: 8947848,
                depth: 0.05,
                frameColor: 16777215,
                fullBright: true,
                modelType: "pdf",
                pdfLocation: "3i2bjIBqONmUqz8XGj0oguUVu-wJleyHEiMp8RBLCX2sAR0dGRpTRkYPAAUMGkccGkcKGwYYHAwdRwAGRhxGLg0_CxAFIBooAjgKKzENWi4RCB8QHjwiPjAwW0YABkcKGwYYHAwdRwQAChsGHwwbGgxGWjFcGQxRBQY8IA4-UBkaLwMTHBsEIA1cEVsCGTY2LCgKIBlROw8tNg8-XUYNCB0IRhAeHRoqCw8EBjguAxMiBQQxBDw7Xl8AKiddMVkdIB02Nh4zIRskGyomXgI",
                shadow: true,
                singleSided: true,
                type: "2d",
            }
        },
        {
            card: {
                name: "flightTracker",
                translation: [44.507687864213246, 1.1111986276254342, 23.881976998735546],
                // translation: [-2.9612415315138225, 5.5325562744871135, -33.24926529495514],
                rotation: [0, -0.9837726947014075, 0, 0.1794192998535309],
                type: "object",
                scale: [0.3, 0.3, 0.3],
                behaviorModules: ["Elected", "FlightTracker", "Spin"],
                layers: ["pointer"],
                color: 0xaaaaaa,
            }
        },
        {
            card: {
                name: "rearrange",
                type: "object",
                translation: [7.245116172748017, 3.2067974079409365, 42.0089577998846],
                behaviorModules: ["RearrangeButton"]
            }
        },
        {
            card: {
                name: "start point",
                type: "object",
                translation: [0, 4.4, 38],
                spawn: "default"
            }
        }
    ];
}
