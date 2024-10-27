# 🛠️ **E2E Testing with Playwright & SafeTest**

This project is part of my learning journey to **perform automated testing** without affecting real websites, using **Playwright** and **SafeTest** tools. It demonstrates how to create virtual testing environments, automate UI interactions, and track visual changes—all while keeping things isolated and safe.

---

## 🎯 **Project Objectives**

- **Learn to automate testing** for web applications without modifying live websites.
- **Explore Playwright** for E2E testing with smooth browser automation.
- **Experiment with SafeTest** for backend automation and visual regression testing.

---

## 🚀 **Features**

- **Virtual Environments** for testing in isolation.
- Parallel test execution using **Playwright**.
- Visual snapshot comparison using **SafeTest**.
- Backend automation to streamline complex workflows.

---

## ⚙️ **Installation Steps**

Make sure you have **Node.js** installed on your machine. Follow these steps to set up the project:

### 1️⃣ **Clone the Repository**

```bash
git clone <repository_url>
cd <repository_folder>
```

### 2️⃣ Install Dependencies

```bash
npm install playwright safetest
```

### 3️⃣ Set Up Playwright Browsers

Playwright requires specific browser binaries to run. Install them with the following command:

```bash
npx playwright install
```

### 4️⃣ Run Your First Test

Create a sample test file inside the project folder, e.g., example.test.js:

javascript

```bash
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.click('text=More information...');
  console.log(await page.title());
  await browser.close();
})();
```

Run the test:

```bash
node example.test.js
```

### 📌 Running Tests with SafeTest

For visual regression or backend testing, SafeTest requires additional setup. You can start by creating a SafeTest config file:

```bash
npx safetest init
```

Execute SafeTest cases:

```bash
npx safetest run
```

### 📢 Conclusion

This project serves as a playground to master automated testing with tools like Playwright and SafeTest. It enables me to explore how to test without affecting real websites and provides practical knowledge of browser automation and regression testing.

### 📄 License

This project is licensed under the MIT License.
