# Test Setup Guide for Bear Game

This document explains how to set up and run tests for the Bear Game project.

## 📋 Prerequisites

Make sure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn

## 🔧 Installation

### 1. Install Testing Dependencies

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom
```

Or with yarn:
```bash
yarn add --dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom
```

### 2. Configure Jest (if using Create React App)

If you created your project with Create React App, Jest is already configured. Skip to step 3.

If not, create a `jest.config.js` file in your project root:

```javascript
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
};
```

### 3. Create Setup File

Create `src/setupTests.js`:

```javascript
import '@testing-library/jest-dom';
```

## 📁 File Structure

Place the test files in the following structure:

```
src/
├── __tests__/
│   ├── App.test.js
│   ├── gamedata.test.js
│   └── hooks/
│       └── useGameHealth.test.js
└── components/
    └── __tests__/
        ├── Level1.test.js
        ├── Level2.test.js
        └── Welcome.test.js
```

## 🧪 Test Files Created

1. **App.test.js** - Tests for main App component
   - Initial render
   - Navigation between screens
   - Game over logic
   - Restart functionality

2. **Level1.test.js** - Tests for Level1 component
   - Answer rendering
   - Correct/wrong answer logic
   - Heart loss mechanics
   - Proceed button functionality

3. **Level2.test.js** - Tests for Level2 component
   - Answer rendering
   - Multiple correct answers
   - Close call mechanics
   - Navigation to Level 3

4. **Welcome.test.js** - Tests for Welcome component
   - Rendering
   - Start button functionality
   - Props handling

5. **useGameHealth.test.js** - Tests for custom hook
   - Initial state
   - Heart loss functions
   - Reset functionality
   - Game over detection

6. **gamedata.test.js** - Tests for game data
   - Data structure validation
   - Export verification
   - Content validation

## 🚀 Running Tests

### Run All Tests
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm test -- --watch
```

### Run Tests with Coverage
```bash
npm test -- --coverage
```

### Run Specific Test File
```bash
npm test App.test.js
```

### Run Tests Matching Pattern
```bash
npm test Level
```

## 📊 Expected Test Results

When all tests pass, you should see:

```
PASS  src/__tests__/gamedata.test.js
PASS  src/__tests__/hooks/useGameHealth.test.js
PASS  src/components/__tests__/Welcome.test.js
PASS  src/components/__tests__/Level1.test.js
PASS  src/components/__tests__/Level2.test.js
PASS  src/__tests__/App.test.js

Test Suites: 6 passed, 6 total
Tests:       XX passed, XX total
```

## 🐛 Common Issues and Solutions

### Issue: "Cannot find module '@testing-library/react'"
**Solution:** Install testing dependencies:
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

### Issue: "ReferenceError: document is not defined"
**Solution:** Make sure jest.config.js has `testEnvironment: 'jsdom'`

### Issue: "Cannot read property 'getByText' of undefined"
**Solution:** Verify you're importing from '@testing-library/react' correctly

### Issue: CSS import errors
**Solution:** Add moduleNameMapper to jest.config.js:
```javascript
moduleNameMapper: {
  '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
}
```

## 📝 Test Coverage Goals

Aim for the following coverage:
- **Statements:** > 80%
- **Branches:** > 75%
- **Functions:** > 80%
- **Lines:** > 80%

## 🎯 What Each Test Suite Covers

### App.test.js
- ✅ Initial rendering
- ✅ Screen navigation
- ✅ Heart system integration
- ✅ Game over detection
- ✅ Victory condition
- ✅ Restart functionality

### Level1.test.js & Level2.test.js
- ✅ Component rendering
- ✅ Answer options display
- ✅ Correct answer handling
- ✅ Wrong answer handling
- ✅ Close call handling
- ✅ Heart loss mechanics
- ✅ Navigation to next level

### Welcome.test.js
- ✅ Component structure
- ✅ Button functionality
- ✅ Props handling

### useGameHealth.test.js
- ✅ Initial state
- ✅ State mutations
- ✅ Edge cases (hearts can't go below 0)
- ✅ Reset functionality
- ✅ Game over detection

### gamedata.test.js
- ✅ Data structure validation
- ✅ Export verification
- ✅ Content validation
- ✅ Consistency checks

## 💡 Testing Best Practices

1. **Run tests before committing** - Ensure all tests pass
2. **Write tests for new features** - Follow TDD approach
3. **Keep tests isolated** - Each test should be independent
4. **Use descriptive test names** - Make failures easy to understand
5. **Mock external dependencies** - Use jest.fn() for functions
6. **Test user interactions** - Use fireEvent from testing-library
7. **Check accessibility** - Use getByRole when possible

## 📚 Additional Resources

- [React Testing Library Docs](https://testing-library.com/react)
- [Jest Documentation](https://jestjs.io/)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## 🎓 Learning Outcomes

By running these tests, you'll understand:
- How to test React components
- How to test custom hooks
- How to test user interactions
- How to mock functions and props
- How to verify component behavior
- How to structure test files
- How to use React Testing Library

---

**Happy Testing!** 🧪✨
