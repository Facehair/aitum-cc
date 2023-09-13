export interface HueTheme {
  on: boolean;
  bri?: number;
  hue?: number;
  // sat?: number;
  // effect?: string;
  xy?: [number, number];
  // ct?: number;
  alert?: string;
  // colormode?: string;
}

// get data from https://192.168.1.151/debug/clip.html
export const singleStateThemes: { [key: string]: HueTheme } = {
  white: {
    on: true,
    // bri: 254,
    // hue: 63584,
    // sat: 254,
    // effect: "none",
    xy: [0.445, 0.4067],
    // ct: 346,
    // alert: "select",
    // colormode: "ct",
  },
  red: {
    on: true,
    // bri: 254,
    // hue: 90,
    // sat: 254,
    // effect: "none",
    xy: [0.6897, 0.3097],
    // ct: 500,
    // alert: "select",
    // colormode: "xy",
  },
  blue: {
    on: true,
    // bri: 254,
    // hue: 90,
    // sat: 254,
    // effect: "none",
    xy: [0.1545, 0.097],
    // ct: 500,
    // alert: "select",
    // colormode: "xy",
  },
  purple: {
    on: true,
    // bri: 254,
    // hue: 90,
    // sat: 254,
    // effect: "none",
    xy: [0.2072, 0.0738],
    // ct: 500,
    // alert: "select",
    // colormode: "xy",
  },
  pink: {
    on: true,
    // bri: 254,
    // hue: 48954,
    // sat: 254,
    // effect: "none",
    xy: [0.3875, 0.1615],
    // ct: 500,
    // alert: "select",
    // colormode: "xy",
  },
  orange: {
    on: true,
    // bri: 254,
    // hue: 48954,
    // sat: 254,
    // effect: "none",
    xy: [0.6755, 0.3203],
    // ct: 500,
    // alert: "select",
    // colormode: "xy",
  },
  green: {
    on: true,
    // bri: 254,
    // hue: 20329,
    // sat: 254,
    // effect: "none",
    xy: [0.2774, 0.6193],
    // ct: 153,
    // alert: "select",
    // colormode: "xy",
  },
  aqua: {
    on: true,
    // bri: 254,
    // hue: 20329,
    // sat: 254,
    // effect: "none",
    xy: [0.1606, 0.3339],
    // ct: 153,
    // alert: "select",
    // colormode: "xy",
  },
};

export const multiStateThemes: { [key: string]: { [key: string]: HueTheme } } =
  // [
  // 			"38",
  // 			"25",
  // 			"26",
  // 			"27",
  // 			"28",
  // 			"29",
  // 			"30"
  // 		]
  {
    default: {
      "38": {
        // Office TV
        on: true,
        // bri: 254,
        // hue: 46551,
        // sat: 254,
        // effect: "none",
        xy: singleStateThemes.green.xy,
        // ct: 500,
        // alert: "select",
        // colormode: "xy",
      },
      "25": {
        // hue play 1
        on: true,
        // bri: 254,
        // hue: 46551,
        // sat: 254,
        // effect: "none",
        xy: singleStateThemes.blue.xy,
        // ct: 500,
        // alert: "select",
        // colormode: "xy",
      },
      "26": {
        // hue play 2
        on: true,
        // bri: 254,
        // hue: 46551,
        // sat: 254,
        // effect: "none",
        xy: singleStateThemes.red.xy,
        // ct: 500,
        // alert: "select",
        // colormode: "xy",
      },
      "27": {
        // Office Fan 1
        on: true,
        // bri: 254,
        // hue: 46551,
        // sat: 254,
        // effect: "none",
        xy: singleStateThemes.orange.xy,
        // ct: 500,
        // alert: "select",
        // colormode: "xy",
      },
      "28": {
        // Office Fan 2
        on: true,
        // bri: 254,
        // hue: 46551,
        // sat: 254,
        // effect: "none",
        xy: singleStateThemes.pink.xy,
        // ct: 500,
        // alert: "select",
        // colormode: "xy",
      },
      "29": {
        // Office Fan 3
        on: true,
        // bri: 254,
        // hue: 46551,
        // sat: 254,
        // effect: "none",
        xy: singleStateThemes.blue.xy,
        // ct: 500,
        // alert: "select",
        // colormode: "xy",
      },
      "30": {
        // Office Fan 4
        on: true,
        // bri: 254,
        // hue: 46551,
        // sat: 254,
        // effect: "none",
        xy: singleStateThemes.purple.xy,
        // ct: 500,
        // alert: "select",
        // colormode: "xy",
      },
    },
    multi: {
      "38": {
        // Office TV
        on: true,
        // bri: 254,
        // hue: 46551,
        // sat: 254,
        // effect: "none",
        xy: singleStateThemes.green.xy,
        // ct: 500,
        // alert: "select",
        // colormode: "xy",
      },
      "25": {
        // hue play 1
        on: true,
        // bri: 254,
        // hue: 46551,
        // sat: 254,
        // effect: "none",
        xy: singleStateThemes.blue.xy,
        // ct: 500,
        // alert: "select",
        // colormode: "xy",
      },
      "26": {
        // hue play 2
        on: true,
        // bri: 254,
        // hue: 46551,
        // sat: 254,
        // effect: "none",
        xy: singleStateThemes.red.xy,
        // ct: 500,
        // alert: "select",
        // colormode: "xy",
      },
      "27": {
        // Office Fan 1
        on: true,
        // bri: 254,
        // hue: 46551,
        // sat: 254,
        // effect: "none",
        xy: singleStateThemes.orange.xy,
        // ct: 500,
        // alert: "select",
        // colormode: "xy",
      },
      "28": {
        // Office Fan 2
        on: true,
        // bri: 254,
        // hue: 46551,
        // sat: 254,
        // effect: "none",
        xy: singleStateThemes.pink.xy,
        // ct: 500,
        // alert: "select",
        // colormode: "xy",
      },
      "29": {
        // Office Fan 3
        on: true,
        // bri: 254,
        // hue: 46551,
        // sat: 254,
        // effect: "none",
        xy: singleStateThemes.blue.xy,
        // ct: 500,
        // alert: "select",
        // colormode: "xy",
      },
      "30": {
        // Office Fan 4
        on: true,
        // bri: 254,
        // hue: 46551,
        // sat: 254,
        // effect: "none",
        xy: singleStateThemes.purple.xy,
        // ct: 500,
        // alert: "select",
        // colormode: "xy",
      },
    },
    sunset: {
      "38": {
        // Office TV
        on: true,
        bri: 138,
        // hue: 46551,
        // sat: 254,
        // effect: "none",
        xy: [0.6635, 0.3293],
        // ct: 500,
        // alert: "select",
        // colormode: "xy",
      },
      "25": {
        // hue play 1
        on: true,
        // bri: 254,
        // hue: 46551,
        // sat: 254,
        // effect: "none",
        xy: singleStateThemes.blue.xy,
        // ct: 500,
        // alert: "select",
        // colormode: "xy",
      },
      "26": {
        // hue play 2
        on: true,
        bri: 254,
        // hue: 46551,
        // sat: 254,
        // effect: "none",
        xy: [0.1554, 0.1339],
        // ct: 500,
        // alert: "select",
        // colormode: "xy",
      },
      "27": {
        // Office Fan 1
        on: true,
        bri: 125,
        // hue: 46551,
        // sat: 254,
        // effect: "none",
        xy: [0.5546, 0.2428],
        // ct: 500,
        // alert: "select",
        // colormode: "xy",
      },
      "28": {
        // Office Fan 2
        on: true,
        bri: 125,
        // hue: 46551,
        // sat: 254,
        // effect: "none",
        xy: [0.6768, 0.3141],
        // ct: 500,
        // alert: "select",
        // colormode: "xy",
      },
      "29": {
        // Office Fan 3
        on: true,
        bri: 125,
        // hue: 46551,
        // sat: 254,
        // effect: "none",
        xy: [0.5758, 0.3274],
        // ct: 500,
        // alert: "select",
        // colormode: "xy",
      },
      "30": {
        // Office Fan 4
        on: true,
        bri: 125,
        // hue: 46551,
        // sat: 254,
        // effect: "none",
        xy: [0.6364, 0.2963],
        // ct: 500,
        // alert: "select",
        // colormode: "xy",
      },
    },
  };
