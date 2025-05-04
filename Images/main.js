import { getDummyData } from './f.js';

const data = getDummyData();
if (data) {
  console.log("Dummy Data:", data);
} else {
  console.warn("No data returned due to domain restrictions.");
}
