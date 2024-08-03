---
title: JQuery Responsive	Month Range Picker (2018)
publishDate: 2018-01-01 00:00:00
img: /assets/jquery-rmrp.png
img_alt: A screenshot of the month range picker in action
description: |
  A simple Jquery plugin that allows users to select a range of months, on old jQuery projects.
tags:
  - Initiator & maintainer
  - Dev
---

### Context

I was working on few projects that required a simple month range picker, but they used jquery. 
I couldn't find a suitable plugin that was responsive and easy to use, so I decided to create my own.

- The dangrossman/bootstrap-daterangepicker didn't provide a month range picker so we decided to initiate our own.
- Rklachko has tried to fork the above project here with month view only, but it is unmaintained and has conflict with dangrossman/bootstrap-daterangepicker if you use it.
- There is already a suggested idea here by Nathan Fiscus, but in some context, we need it with more flexible options.
- Another existing component is proposed here by yairEO, but it is not responsive (Tether js issue we think).

### Solution

I proposed light solution:
- which has no conflict with dangrossman/bootstrap-daterangepicker,
- which is responsive
- more flexible

### Impact

My fellow developers found it useful and it was used in a few projects. It was a good learning experience for me as well.
From the Github community, it was starred 5 times, forked 5 times.
Then deprecated due to the lack of maintenance and the fact we transitioned to modern solutions (vuejs, reactjs).

### Main tech stacks
Js, Jquery, CSS, HTML