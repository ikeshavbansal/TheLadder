# Theory Questions Response

## Question 1: Complex Animation Implementation

To create smooth and complex scroll triggered animation I would break the animation into smaller and reusable components and triggered only when needed. To keep performance high I would focus on animating properties like transform and opacity which are
GPU accelerated and avoid animation that cause layout recalculation like width and height.

For profiling I would use browser developer tools to monitor frame rates, dropped frames and animated paint times. Tools like lighthouse would help analyse overall page performance . Based on the findings, I would test them on multiple device to ensure smooth performance.

## Question 2: Handling Traffic Spikes

I would start by monitoring the system using different tools. Adding caching with redis for frequently accessed data, would help reduce database load immediately.

I would implement a containerised setup with docker and kubernetes to allow automatic growth . I would also optimise the APIs for better load distribution with less DB queries and handling errors.

## Question 3: AI Tools Integration

When using AI tools I would rely on them for exploring patterns and saving time, but I would carefuly review and test their outputs to avoid errors.

I would use Ai to write test cases to catch issues early. For both APIs and react component using react testing library and JEST.

## Question 4: Legacy Application Modernization

The first phase would involve adding logging and monitoring on each sections to understand the application's behavior. Critical paths would be identified through user analytics and error rates. High-traffic components would be prioritized for refactoring.

Success metrics would include reduced error rates, improved response times, and decreased deployment failures. Regular team meetings and clear documentation would keep everyone aligned with the modernization goals.
