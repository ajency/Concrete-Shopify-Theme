import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes';
import 'lazysizes/plugins/respimg/ls.respimg';

import '../../styles/theme.scss';
import '../../styles/theme.scss.liquid';

import {focusHash, bindInPageLinks} from '@shopify/theme-a11y';
import {cookieTest} from '@elkfox/shopify-theme/scripts/cookies';
import {getCart} from '@elkfox/shopify-theme/scripts/cart';
import {responsiveVideos} from '@elkfox/shopify-theme/scripts/responsive-videos';
import {responsiveTables} from '@elkfox/shopify-theme/scripts/responsive-tables';

// Common a11y fixes
focusHash();
bindInPageLinks();

// Detect cookie support
cookieTest();

// Responsive tables & RTE videos
responsiveVideos();
responsiveTables();

// You can use the cart details to update the UI
console.log(getCart())
