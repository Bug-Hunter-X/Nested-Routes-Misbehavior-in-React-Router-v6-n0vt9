# React Router v6 Nested Routes Bug

This repository demonstrates a bug encountered when using nested routes with React Router v6.  The issue involves unexpected rendering behavior, where nested routes fail to render correctly or not at all.

## Problem Description

The original code uses nested routes.  However, the nested routes do not render as expected.  This may manifest as the wrong components displaying, components not displaying at all, or other unexpected rendering behavior.

## Solution

The solution involves carefully reviewing the route definitions in the App component, ensuring correct path specifications and component mappings.  The solution also includes using the `useLocation` hook for accessing the current route location and potential improvements in route structure.