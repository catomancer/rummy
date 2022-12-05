import { Vector } from '../types';

export class Card {
    private cardImage: HTMLImageElement = new Image();

    constructor(
        private cardWidth: number,
        private cardHeight: number,
        private position: Vector,
        image: string
    ) {
        this.cardWidth = cardWidth;
        this.cardHeight = cardHeight;
        this.position = position;
        this.cardImage.src = image;
    }

    // Getters
    get width(): number {
        return this.cardWidth;
    }

    get height(): number {
        return this.cardHeight;
    }

    get pos(): Vector {
        return this.position;
    }

    get image(): HTMLImageElement {
        return this.cardImage;
    }
}