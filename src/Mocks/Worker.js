import { setupWorker } from "msw";
import { handlers } from "./Handler"; // 위에서 정의한 Handler

export const worker = setupWorker(...handlers);