# TODO: Fix Home Page Carousel Issues

## Completed Tasks
- [x] Analyze Home.jsx file and identify issues with image click, centering, and navigation
- [x] Add activeIndex state and swiperRef to track and control the active slide
- [x] Update handleClick to implement navigation: click left image -> slidePrev, click right image -> slideNext, click center -> do nothing
- [x] Add onSwiper and onSlideChange props to Swiper to sync activeIndex with swiper state
- [x] Replace zoomedIndex with activeIndex in className for visual effects
- [x] Fix image src typo (V-lab.jpg to V-Lab.jpg)

## Pending Tasks
- [ ] Test the carousel functionality to ensure clicking left/right images navigates correctly, and center image is highlighted
- [ ] Verify that the selected image is properly centered and highlighted
- [ ] Run the application and confirm all issues are resolved
