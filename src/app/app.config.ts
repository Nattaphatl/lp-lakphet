import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

// Angular 22: zoneless + OnPush เป็นค่าเริ่มต้น จึงไม่ต้องใช้ zone.js
export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners()],
};
