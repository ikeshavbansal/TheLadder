# Interactive Web Sections

## Animation Approach

-   **3D Rotating Cube**

    -   Built dual-sided content with front and back faces for a 3D effect. On the brown surface, it can display the inside of the cube, allowing us to see the backside of each face.
    -   Used Framer Motion for scroll-triggered rotations
    -   Synchronized background image changes with cube rotation
    -   Time: ~4 hours

-   **Folding Boxes**

    -   Created sequential box animations triggered by scroll position
    -   Added a background dimming effect during fold transitions. After scrolling, one box folds and attaches to the top side, then the second box animation starts.
    -   Time: ~4 hours

-   **Expanding Cards**
    -   Developed coordinated animations between cards and background circles
    -   Added mouse interaction effects for enhanced engagement
    -   Used scale transforms for smooth circle expansions
    -   Time: ~3 hours

## Responsive Design

-   Used Tailwind CSS for flexible layouts
-   Optimized performance for mobile devices

## Assumptions Made

1. Desktop-first experience due to complex animations
2. Minimum viewport width of 320px
3. Stable internet connection for data fetching

## AI Tool Usage

Used AI assistance for:

-   Mouse interaction effects in expanding cards section
-   Performance optimization suggestions
-   Debugging complex animations for 3d cube rotation.

## Development Stack

-   React + Framer Motion + Tailwind Css for frontend
-   Node.js & Express for backend
-   MongoDB for data storage
