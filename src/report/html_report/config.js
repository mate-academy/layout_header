report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Header_tag_1024px.png",
        "test": "..\\bitmaps_test\\20191223-141543\\Header_tag_1024px.png",
        "selector": "header",
        "fileName": "Header_tag_1024px.png",
        "label": "Header tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.02",
          "analysisTime": 27
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Header_tag_1200px.png",
        "test": "..\\bitmaps_test\\20191223-141543\\Header_tag_1200px.png",
        "selector": "header",
        "fileName": "Header_tag_1200px.png",
        "label": "Header tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.01",
          "analysisTime": 26
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Nav_tag_1024px.png",
        "test": "..\\bitmaps_test\\20191223-141543\\Nav_tag_1024px.png",
        "selector": "nav",
        "fileName": "Nav_tag_1024px.png",
        "label": "Nav tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -20,
            "height": 0
          },
          "misMatchPercentage": "11.37",
          "analysisTime": 39
        },
        "diffImage": "..\\bitmaps_test\\20191223-141543\\failed_diff_Nav_tag_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Nav_tag_1200px.png",
        "test": "..\\bitmaps_test\\20191223-141543\\Nav_tag_1200px.png",
        "selector": "nav",
        "fileName": "Nav_tag_1200px.png",
        "label": "Nav tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -20,
            "height": 0
          },
          "misMatchPercentage": "11.37",
          "analysisTime": 29
        },
        "diffImage": "..\\bitmaps_test\\20191223-141543\\failed_diff_Nav_tag_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Link_with_data-qa_hover_1024px.png",
        "test": "..\\bitmaps_test\\20191223-141543\\Link_with_data-qa_hover_1024px.png",
        "selector": "[data-qa=\"hover\"]",
        "fileName": "Link_with_data-qa_hover_1024px.png",
        "label": "Link with data-qa_hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Link_with_data-qa_hover_1200px.png",
        "test": "..\\bitmaps_test\\20191223-141543\\Link_with_data-qa_hover_1200px.png",
        "selector": "[data-qa=\"hover\"]",
        "fileName": "Link_with_data-qa_hover_1200px.png",
        "label": "Link with data-qa_hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Link_with_class_is-active_1024px.png",
        "test": "..\\bitmaps_test\\20191223-141543\\Link_with_class_is-active_1024px.png",
        "selector": "a.is-active",
        "fileName": "Link_with_class_is-active_1024px.png",
        "label": "Link with class_is-active",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.28",
          "analysisTime": 7
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Link_with_class_is-active_1200px.png",
        "test": "..\\bitmaps_test\\20191223-141543\\Link_with_class_is-active_1200px.png",
        "selector": "a.is-active",
        "fileName": "Link_with_class_is-active_1200px.png",
        "label": "Link with class_is-active",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.28",
          "analysisTime": 6
        }
      },
      "status": "pass"
    }
  ]
});