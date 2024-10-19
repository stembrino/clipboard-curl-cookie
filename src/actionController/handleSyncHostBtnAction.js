import { selector } from "../domManipulation/domSelector.js";
import { serviceSyncHostService } from "../service/serviceSyncHostService.js";

let syncHostBtnTimeout = null;
const syncHostBtnInitText = selector.syncHostBtn.textContent;

export const handleSyncHostBtn = async () => {
  if (syncHostBtnTimeout) return;

  const feedbackMsg = await serviceSyncHostService.sendCookieToHost();

  selector.syncHostBtn.textContent = feedbackMsg;
  syncHostBtnTimeout = setTimeout(() => {
    syncHostBtnTimeout = null;
    selector.syncHostBtn.textContent = syncHostBtnInitText;
  }, 2000);
};
