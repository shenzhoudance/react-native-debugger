import {
  replaceForbiddenHeadersForWorkerXHR,
  addURIWarningForWorkerFormData,
} from './networkInspect';

// Add the missing `global` for WebWorker
self.global = self;
// React Native wouldn't saved native fetch to original*
self.originalFetch = self.fetch;

replaceForbiddenHeadersForWorkerXHR();
addURIWarningForWorkerFormData();
