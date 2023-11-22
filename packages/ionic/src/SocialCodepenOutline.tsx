import React from 'react'

export default function SocialCodepenOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path fillRule="evenodd" clipRule="evenodd" d="M387.547 203.724a41090.004 41090.004 0 0 1-123.261-82.195c-5.844-3.912-11.12-3.802-16.938.095-40.785 27.313-81.818 54.546-122.724 81.676-5.103 3.384-7.624 7.575-7.624 13.716v79.729c0 6.174 2.484 10.342 7.594 13.73 40.906 27.13 81.841 54.361 122.625 81.676 5.81 3.891 11.131 4.055 16.984.137A38295.814 38295.814 0 0 1 387.489 310.1c4.858-3.226 7.511-7.309 7.511-13.094v-80.623c0-5.716-2.775-9.553-7.453-12.659zM268 152.484l93.055 62.218-39.751 26.467c-.919.603-2.923.604-3.839 0a4537.117 4537.117 0 0 1-47.627-31.815c-1.033-.699-1.828-2.319-1.838-3.52v-53.35zm-24 .281v51.706c-.024 1.825-1.313 4.316-2.799 5.334-15.258 10.451-30.655 20.701-46.109 30.86-1.17.77-3.547 1.148-4.566.485-13.116-8.531-26.087-17.284-39.787-26.443C181.967 193.889 244 152.765 244 152.765zm-103 84.351l29.622 19.771L141 276.725v-39.609zm103 124.201s-62.034-41.412-93.196-62.187l38.871-26.154c2.072-1.442 3.473-1.344 5.502.029 15.32 10.36 30.74 20.572 46.062 30.93 1.208.815 2.749 2.371 2.761 3.596v53.786zm14.949-78.425c-1.824 1.108-4.512 1.046-6.26-.111l-38.842-25.865s17.108-11.493 25.356-17.023c4.701-3.152 9.346-6.393 14.164-9.355 1.132-.696 3.532-.97 4.743-.168 5.773 3.829 39.854 26.53 39.854 26.53l-39.015 25.992zm9.051 78.21v-51.346c-.026-2.871.449-4.602 2.861-6.189a3826.352 3826.352 0 0 0 45.386-30.332c2.335-1.586 3.92-1.623 6.265-.019l38.527 25.882L268 361.102zm102-84.426l-29.59-19.743L370 237.06v39.616z" fill="currentColor"/><path d="M256 64c51.285 0 99.5 19.972 135.765 56.235C428.028 156.5 448 204.715 448 256s-19.972 99.5-56.235 135.765C355.5 428.028 307.285 448 256 448s-99.5-19.972-135.765-56.235C83.972 355.5 64 307.285 64 256s19.972-99.5 56.235-135.765C156.5 83.972 204.715 64 256 64m0-32C132.288 32 32 132.288 32 256s100.288 224 224 224 224-100.288 224-224S379.712 32 256 32z" fill="currentColor"/></svg>
  )
}