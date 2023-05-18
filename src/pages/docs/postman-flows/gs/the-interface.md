---
title: "The Postman Flows interface"
updated: 2023-05-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Download and Install"
    url: "https://www.postman.com/downloads/"
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "The Infinite Canvas: Building Applications with Postman Flows"
    url: "https://www.youtube.com/live/liy0WVwC86s?feature=share"
  - type: link
    name: "AI Powered Sentiment Analysis with Postman Flows and ChatGPT"
    url: "https://www.youtube.com/live/0kAQb3Q4WCQ?feature=share"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Postman Flows: The Next Generation of Software Development"
    url: "https://blog.postman.com/postman-flows-the-next-generation-of-software-development/"
  - type: link
    name: "Postman Flows Is Now More Powerful and User-Friendly"
    url: "https://blog.postman.com/postman-flows-is-now-more-powerful-and-user-friendly/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Built Technologies non-technical team members use Postman Flows"
    url: "https://www.postman.com/case-studies/built/"
---

The Postman Flows interface has three main parts: the toolbar, the right sidebar, and the console.

## Contents

* [Toolbar](#toolbar)
* [Right sidebar](#right-sidebar)
* [Minimap](#minimap)
* [Console](#console)

![Interface](https://assets.postman.com/postman-docs/v10/flows-interface-main-v10-2.jpg)

## Toolbar

The toolbar gives you access to tools you can use to manipulate the canvas.
![Toolbar](https://assets.postman.com/postman-docs/v10/updated-interface-tool-bar-v10.jpg)

* **Zoom controls**

  Use the toolbar to zoom in or out the canvas. Fit-to-view adjusts the zoom level to fit your entire flow on the visible canvas.

  You can also press and hold **⌘** or **Ctrl** while scrolling to zoom in or out.
  ![Zoom](https://assets.postman.com/postman-labs-docs/interface/updated-interface-zoom-controls.gif)

* **Run**

  Select **Run** to start the flow you've built on the canvas. During an active run, select **Stop** to stop the flow.

  ![Start a flow](https://assets.postman.com/postman-labs-docs/interface/updated-interface-start-flow.gif)

* **Add block**

  Use the toolbar to add a block to the canvas. Select **+ Block** and choose from the list of available blocks.

  ![Add a block](https://assets.postman.com/postman-labs-docs/interface/updated-interface-add-block.gif)

* **Text**

  You can add rich markdown on the canvas to describe what your flow is doing. Press `T` or select the text icon on the toolbar and place the text block on the canvas.

  ![Add text](https://assets.postman.com/postman-labs-docs/interface/updated-interface-add-annotations.gif)

## Right sidebar

The right sidebar is the place where you'll see more information about your flow and its current state.
![Right sidebar](https://assets.postman.com/postman-docs/v10/updated-interface-context-bar-v10-3.jpg)

* **Runs**

  Shows the deployment status and your flow's webhook URL. Enables you to deploy or undeploy your flow. You can toggle between viewing the deployed flow and viewing the flow in the editor. Also shows the selected flow's webhook events.

  ![Runs](https://assets.postman.com/postman-docs/v10/flows-right-sidebar-runs-v10.jpg)

* **Configuration**

  Shows the available configuration options and ports for the selected block. You can edit the block's title here.

  ![Configuration](https://assets.postman.com/postman-docs/v10/flows-right-sidebar-config-v10.jpg)

* [**Forks**](/docs/collaborating-in-postman/using-version-control/forking-entities/)

  Shows a list of all the created forks of the flow.

* **Info**

  You can see the flow ID and creator, and add a summary for your flow here.

## Minimap

  ![Minimap](https://assets.postman.com/postman-docs/v10/flows-minimap-v10.jpg)

The minimap is an interactive map of your flow. Hover over the minimap to enlarge it. The gray rectangle is the visible portion of your flow. The **Start** block is highlighted in orange. Click anywhere in the minimap to jump to a location. You can click and drag in the minimap, too. Note that the minimap displays miniature versions of blocks in their assigned colors.

## Console

  All of your print blocks and logs will appear here.

  ![Console](https://assets.postman.com/postman-labs-docs/interface/console.gif)
