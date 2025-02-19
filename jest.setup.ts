import "@testing-library/jest-dom";
import "whatwg-fetch";
import { TextDecoder, TextEncoder } from "util";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;
