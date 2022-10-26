import { SetMetadata } from '@nestjs/common';

export const IS_CLARISA_PAGE = 'isCLARISAPage';
export const ClarisaPageOnly = () => SetMetadata(IS_CLARISA_PAGE, true);
