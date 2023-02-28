export interface HueTheme {
  on: boolean;
  // bri?: number;
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
  {
    default: {
      "35": {
        // hue play 2
        on: true,
        // bri: 254,
        // hue: 46551,
        // sat: 254,
        // effect: "none",
        xy: [0.1536, 0.0643],
        // ct: 500,
        // alert: "select",
        // colormode: "xy",
      },
      "34": {
        // hue play 1
        on: true,
        // bri: 254,
        // hue: 63584,
        // sat: 254,
        // effect: "none",
        xy: [0.6345, 0.2807],
        // ct: 500,
        // alert: "select",
        // colormode: "xy",
      },
      "29": {
        // office shelf (little gold lamp)
        on: true,
        // bri: 254,
        // hue: 20650,
        // sat: 253,
        // effect: "none",
        xy: [0.2713, 0.6233],
        // ct: 153,
        // alert: "select",
        // colormode: "xy",
      },
      "31": {
        // office fan
        on: true,
        // bri: 254,
        // hue: 10337,
        // sat: 16,
        // effect: "none",
        xy: [0.3868, 0.3825],
        // ct: 258,
        // alert: "select",
        // colormode: "ct",
      },
    },
  };
