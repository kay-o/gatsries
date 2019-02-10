import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import UserStoryPagePreview from './preview-templates/UserStoryPagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('user-stories', UserStoryPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
