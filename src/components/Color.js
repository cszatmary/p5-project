// @flow

import randomInt from './functions';

class Color {
    r: number;
    g: number;
    b: number;
    a: number;

    constructor(r: number, g: number = r, b: number = r, a: number = 255) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    /** Returns a p5 color using the Color object's RGBA values */
    getP5Color(): color {
        return color(this.r, this.g, this.b, this.a);
    }

    /** Updates the object's RGBA values */
    setColor(r: number, g: number, b: number, a: number) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    /** Updates the object's RGBA values using a given p5 color */
    updateFromP5Color(p5Color: color) {
        this.r = p5Color._getRed();
        this.g = p5Color._getGreen();
        this.b = p5Color._getBlue();
        this.a = p5Color._getAlpha();
    }

    /** Updates the object's RBGA values using a given array */
    updateFromArray(array: Array<number>) {
        this.r = array[0];
        this.g = array[1];
        this.b = array[2];

        if (array[3] !== undefined) {
            this.a = array[3];
        }
    }

    /** Returns a Color object with random RGB values */
    static randomColor(hasRandomAlpha: boolean): Color {
        return new Color(randomInt(0, 256), randomInt(0, 256), randomInt(0, 256), hasRandomAlpha ? randomInt(0, 256) : 255);
    }

    /** Returns a random p5 color */
    static p5RandomColor(hasRandomAlpha: boolean): color {
        return color(random(0, 255), random(0, 255), random(0, 255), hasRandomAlpha ? random(0, 255) : 255);
    }

    /** Returns a Color object from a given p5 color */
    static fromP5Color(p5Color: color): Color {
        return new Color(p5Color._getRed(), p5Color._getGreen(), p5Color._getBlue(), p5Color._getAlpha());
    }

    /** Returns a Color object from a given array */
    static fromArray(array: Array<number>): Color {
        return new Color(array[0], array[1], array[2], array[3] !== undefined ? array[3] : 255);
    }
}

export default Color;