// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InsuranceFilledSvg from '@ant-design/icons-svg/lib/asn/InsuranceFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InsuranceFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InsuranceFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  InsuranceFilled.displayName = 'InsuranceFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(InsuranceFilled);