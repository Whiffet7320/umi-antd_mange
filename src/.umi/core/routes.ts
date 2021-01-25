// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/asus/Desktop/umi_student_manage/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/index.js').default,
    "routes": [
      {
        "path": "/",
        "exact": true,
        "component": require('@/pages/index.js').default,
        "wrappers": [require('@/routes/PrivateRouter.js').default]
      },
      {
        "path": "/login",
        "exact": true,
        "component": require('@/pages/login.js').default
      },
      {
        "path": "/student/add",
        "exact": true,
        "component": require('@/pages/student/add.js').default
      },
      {
        "path": "/student/avatar",
        "exact": true,
        "component": require('@/pages/student/avatar.js').default
      },
      {
        "path": "/student",
        "exact": true,
        "component": require('@/pages/student/index.js').default,
        "wrappers": [require('@/routes/PrivateRouter.js').default]
      },
      {
        "path": "/student/:sNo",
        "exact": true,
        "component": require('@/pages/student/[sNo].js').default
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
