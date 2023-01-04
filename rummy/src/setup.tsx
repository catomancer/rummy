// import card images
import ACE_OF_HEARTS_IMAGE from './images/ace_of_hearts.png';
import TWO_OF_HEARTS_IMAGE from './images/2_of_hearts.png';
import THREE_OF_HEARTS_IMAGE from './images/3_of_hearts.png';
import FOUR_OF_HEARTS_IMAGE from './images/4_of_hearts.png';
import FIVE_OF_HEARTS_IMAGE from './images/5_of_hearts.png';
import SIX_OF_HEARTS_IMAGE from './images/6_of_hearts.png';
import SEVEN_OF_HEARTS_IMAGE from './images/7_of_hearts.png';
import EIGHT_OF_HEARTS_IMAGE from './images/8_of_hearts.png';
import NINE_OF_HEARTS_IMAGE from './images/9_of_hearts.png';
import TEN_OF_HEARTS_IMAGE from './images/10_of_hearts.png';
import JACK_OF_HEARTS_IMAGE from './images/jack_of_hearts.png';
import QUEEN_OF_HEARTS_IMAGE from './images/queen_of_hearts.png';
import KING_OF_HEARTS_IMAGE from './images/king_of_hearts.png';
import ACE_OF_DIAMONDS_IMAGE from './images/ace_of_diamonds.png';
import TWO_OF_DIAMONDS_IMAGE from './images/2_of_diamonds.png';
import THREE_OF_DIAMONDS_IMAGE from './images/3_of_diamonds.png';
import FOUR_OF_DIAMONDS_IMAGE from './images/4_of_diamonds.png';
import FIVE_OF_DIAMONDS_IMAGE from './images/5_of_diamonds.png';
import SIX_OF_DIAMONDS_IMAGE from './images/6_of_diamonds.png';
import SEVEN_OF_DIAMONDS_IMAGE from './images/7_of_diamonds.png';
import EIGHT_OF_DIAMONDS_IMAGE from './images/8_of_diamonds.png';
import NINE_OF_DIAMONDS_IMAGE from './images/9_of_diamonds.png';
import TEN_OF_DIAMONDS_IMAGE from './images/10_of_diamonds.png';
import JACK_OF_DIAMONDS_IMAGE from './images/jack_of_diamonds.png';
import QUEEN_OF_DIAMONDS_IMAGE from './images/queen_of_diamonds.png';
import KING_OF_DIAMONDS_IMAGE from './images/king_of_diamonds.png';
import ACE_OF_CLUBS_IMAGE from './images/ace_of_clubs.png';
import TWO_OF_CLUBS_IMAGE from './images/2_of_clubs.png';
import THREE_OF_CLUBS_IMAGE from './images/3_of_clubs.png';
import FOUR_OF_CLUBS_IMAGE from './images/4_of_clubs.png';
import FIVE_OF_CLUBS_IMAGE from './images/5_of_clubs.png';
import SIX_OF_CLUBS_IMAGE from './images/6_of_clubs.png';
import SEVEN_OF_CLUBS_IMAGE from './images/7_of_clubs.png';
import EIGHT_OF_CLUBS_IMAGE from './images/8_of_clubs.png';
import NINE_OF_CLUBS_IMAGE from './images/9_of_clubs.png';
import TEN_OF_CLUBS_IMAGE from './images/10_of_clubs.png';
import JACK_OF_CLUBS_IMAGE from './images/jack_of_clubs.png';
import QUEEN_OF_CLUBS_IMAGE from './images/queen_of_clubs.png';
import KING_OF_CLUBS_IMAGE from './images/king_of_clubs.png';
import ACE_OF_SPADES_IMAGE from './images/ace_of_spades.png';
import TWO_OF_SPADES_IMAGE from './images/2_of_spades.png';
import THREE_OF_SPADES_IMAGE from './images/3_of_spades.png';
import FOUR_OF_SPADES_IMAGE from './images/4_of_spades.png';
import FIVE_OF_SPADES_IMAGE from './images/5_of_spades.png';
import SIX_OF_SPADES_IMAGE from './images/6_of_spades.png';
import SEVEN_OF_SPADES_IMAGE from './images/7_of_spades.png';
import EIGHT_OF_SPADES_IMAGE from './images/8_of_spades.png';
import NINE_OF_SPADES_IMAGE from './images/9_of_spades.png';
import TEN_OF_SPADES_IMAGE from './images/10_of_spades.png';
import JACK_OF_SPADES_IMAGE from './images/jack_of_spades.png';
import QUEEN_OF_SPADES_IMAGE from './images/queen_of_spades.png';
import KING_OF_SPADES_IMAGE from './images/king_of_spades.png';

// Constants
export const CARD_WIDTH = 230;
export const CARD_HEIGHT = 300;
export const HAND_START_X = 200;
export const HAND_Y = 300;
export const DECK_X = 50;
export const DECK_Y = 50;
export const TABLE_WIDTH = 1000;
export const TABLE_HEIGHT = 500;

export const CARD_IMAGES: { [key: number]: string } = {
    1: ACE_OF_HEARTS_IMAGE,
    2: TWO_OF_HEARTS_IMAGE,
    3: THREE_OF_HEARTS_IMAGE,
    4: FOUR_OF_HEARTS_IMAGE,
    5: FIVE_OF_HEARTS_IMAGE,
    6: SIX_OF_HEARTS_IMAGE,
    7: SEVEN_OF_HEARTS_IMAGE,
    8: EIGHT_OF_HEARTS_IMAGE,
    9: NINE_OF_HEARTS_IMAGE,
    10: TEN_OF_HEARTS_IMAGE,
    11: JACK_OF_HEARTS_IMAGE,
    12: QUEEN_OF_HEARTS_IMAGE,
    13: KING_OF_HEARTS_IMAGE,
    14: ACE_OF_DIAMONDS_IMAGE,
    15: TWO_OF_DIAMONDS_IMAGE,
    16: THREE_OF_DIAMONDS_IMAGE,
    17: FOUR_OF_DIAMONDS_IMAGE,
    18: FIVE_OF_DIAMONDS_IMAGE,
    19: SIX_OF_DIAMONDS_IMAGE,
    20: SEVEN_OF_DIAMONDS_IMAGE,
    21: EIGHT_OF_DIAMONDS_IMAGE,
    22: NINE_OF_DIAMONDS_IMAGE,
    23: TEN_OF_DIAMONDS_IMAGE,
    24: JACK_OF_DIAMONDS_IMAGE,
    25: QUEEN_OF_DIAMONDS_IMAGE,
    26: KING_OF_DIAMONDS_IMAGE,
    27: ACE_OF_CLUBS_IMAGE,
    28: TWO_OF_CLUBS_IMAGE,
    29: THREE_OF_CLUBS_IMAGE,
    30: FOUR_OF_CLUBS_IMAGE,
    31: FIVE_OF_CLUBS_IMAGE,
    32: SIX_OF_CLUBS_IMAGE,
    33: SEVEN_OF_CLUBS_IMAGE,
    34: EIGHT_OF_CLUBS_IMAGE,
    35: NINE_OF_CLUBS_IMAGE,
    36: TEN_OF_CLUBS_IMAGE,
    37: JACK_OF_CLUBS_IMAGE,
    38: QUEEN_OF_CLUBS_IMAGE,
    39: KING_OF_CLUBS_IMAGE,
    40: ACE_OF_SPADES_IMAGE,
    41: TWO_OF_SPADES_IMAGE,
    42: THREE_OF_SPADES_IMAGE,
    43: FOUR_OF_SPADES_IMAGE,
    44: FIVE_OF_SPADES_IMAGE,
    45: SIX_OF_SPADES_IMAGE,
    46: SEVEN_OF_SPADES_IMAGE,
    47: EIGHT_OF_SPADES_IMAGE,
    48: NINE_OF_SPADES_IMAGE,
    49: TEN_OF_SPADES_IMAGE,
    50: JACK_OF_SPADES_IMAGE,
    51: QUEEN_OF_SPADES_IMAGE,
    52: KING_OF_SPADES_IMAGE
};