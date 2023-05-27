import { notifyToast } from "./index"

export const notifyInfo = (content, duration) => {
  notifyToast({
    content: content || "Info",
    type: "info",
    duration,
  })
}
