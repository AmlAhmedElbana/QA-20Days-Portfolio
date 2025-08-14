# Mini-Project 1 – UI ↔ API Consistency Testing

**Date:** 13-8-2025 
**Tester:** [Aml Ahmed]  
**Duration:** ~4.5 hours  
**Application Under Test (AUT):** Local HTML page fetching `/posts` from JSONPlaceholder API

---

## 1. Scope & Objectives
Verify consistency between data displayed in the mini UI and the actual API response from JSONPlaceholder.  
Focus on functional UI tests, API contract validation, and data consistency between layers.

---

## 2. Test Coverage
| Test Type | No. of TC | Pass | Fail | Pass Rate |
|-----------|-----------|------|------|-----------|
| UI Manual | 10        | 10   | 0    | 100%      |
| API Manual| 10        | 10   | 0    | 100%      |
| **Total** | **20**    | **20**| 0    | **100%**  |

---

## 3. Key Findings
- UI successfully displayed the first 10 posts within acceptable load time.
- All `<li>` elements had a valid `data-id` matching the API IDs.
- Titles matched exactly between UI and API for the first 10 posts.
- API endpoints returned correct status codes and matched JSON schema.
- No critical or high-severity bugs were found.

---

## 4. Bugs Logged
- **None** – No discrepancies found during execution.

---

## 5. Risks & Limitations
- Data is retrieved from a public API (JSONPlaceholder) which can change or be unavailable without notice.
- Performance testing not included.
- Security testing out of scope.

---

## 6. Recommendations
- Automate UI ↔ API consistency checks using Cypress or Playwright.
- Integrate API tests into CI/CD using Newman.
- Add basic error handling and loading indicators in the UI.

---

## 7. Conclusion
The mini-project met its objectives with 100% test pass rate and confirmed reliable data consistency between the UI and API.  
This validates the end-to-end flow for the given scope and provides a solid foundation for future automation.

---
