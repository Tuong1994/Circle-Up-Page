const common_en = {
  routes: {
    home: 'Home',
    friends: 'Friends',
    saved: 'Saved',
    savedItems: 'Saved Items',
    collection: 'Collection',
    events: 'Events',
    friendRequests: 'Friend requests',
    friendSuggestions: 'Suggestions',
    friendList: 'All friends',
    profilePost: 'Post',
    profileAbout: 'About',
    profileFriends: 'Friends',
    profilePhotos: 'Photos'
  },
  header: {
    searchInput: {
      recent: 'Recent',
      placeholder: 'Search Circle Up'
    },
    features: {
      notification: {
        title: 'Notification',
        markReadAll: 'Mark all as read',
        markRead: 'Mark as read',
        open: 'Open notifications',
        remove: 'Remove this notification'
      },
      profile: {
        title: 'Profile',
        setting: 'Setting',
        language: 'Language',
        display: 'Display',
        logout: 'Logout',
        english: 'English',
        vietnamese: 'Vietnamese',
        theme: 'Theme'
      }
    }
  },
  hoverInfo: {
    visit: 'Visit group',
    message: 'Message',
    like: 'Like',
    report: 'Report page',
    block: 'Block',
    invite: 'Invite friends',
    follow: 'Follow'
  },
  audiences: {
    modal: {
      title: 'Select audience'
    },
    friends: {
      title: 'Friends',
      desc: 'Anyone on or off Circle Up'
    },
    public: {
      title: 'Public',
      desc: 'Your friends on Circle Up'
    },
    private: {
      title: 'Only me',
      desc: 'Only you can see'
    }
  },
  comment: {
    comment: 'Comment',
    like: 'Like',
    reply: 'Reply',
    emoji: 'Insert an emoji',
    photo: 'Attach a photo',
    sticker: 'Comment with a sticker',
    feeling: {
      happy: 'Happy',
      inLove: 'In love',
      sad: 'Sad',
      eating: 'Eating',
      celebrating: 'Celebrating',
      active: 'Active',
      working: 'Working',
      sleepy: 'Sleepy',
      angry: 'Angry',
      confused: 'Confused'
    }
  },
  form: {
    label: {
      account: 'Account',
      password: 'Password',
      oldPassword: 'Old password',
      newPassword: 'New password',
      confirmPassword: 'Confirm password',
      firstName: 'First name',
      lastName: 'Last name',
      fullName: 'Full name',
      phone: 'Phone',
      email: 'Email',
      gender: 'Gender',
      birthday: 'Birthday',
      fullAddress: 'Address',
      address_en: 'Address (EN)',
      address_vn: 'Address (VN)',
      city: 'City/Province',
      district: 'District',
      ward: 'Ward',
      note: 'Note',
      status: 'Status',
      optional: 'Optional',
      company: 'Company',
      school: 'School',
      relationship: 'Relationship',
      position: 'Position',
      desc: 'Description',
      albumName: 'Album name',
      collectionName: 'Collection name'
    },
    placeholder: {
      enter: 'Enter infomation',
      select: 'Select',
      search: 'Search',
      imagesUpload: 'Select or drag image here',
      filesUpload: 'Choose file',
      comment: 'Write a comment'
    },
    rule: {
      required: 'This field is required',
      phone: 'Phone invalid',
      email: 'Email invalid',
      confirmPassword: 'The passwords do not match',
      whiteSpace: 'White space are not allowed',
      min: '{{min}} is minimum',
      max: '{{max}} is maximum',
      minLength: 'Must have at least {{min}} character',
      maxLength: 'Maximum length {{max}} characters'
    },
    others: {
      emptyOptions: 'No options',
      optional: 'Optional',
      fileSize: 'File size must not greater than {{num}}MB',
      fileType: 'Only accept file type {{type}}',
      fileMax: 'Can only upload {{num}} image per time',
      newUploadImg: 'New images',
      uploadedImg: 'Uploaded images'
    }
  },
  actions: {
    ok: 'Ok',
    done: 'Done',
    post: 'Post',
    send: 'Send',
    save: 'Save',
    edit: 'Edit',
    create: 'Create',
    update: 'Update',
    remove: 'Remove',
    filter: 'Filter',
    cancel: 'Cancel',
    confirm: 'Confirm',
    delete: 'Delete'
  },
  table: {
    head: {
      customerName: 'Full name',
      phone: 'Phone',
      email: 'Email',
      gender: 'Gender',
      birthday: 'Birthday',
      address: 'Address',
      image: 'Image',
      status: 'Status',
      createdAt: 'Created date',
      updatedAt: 'Updated date'
    }
  },
  pagination: {
    showing: 'Showing',
    of: 'of',
    result: 'results'
  },
  message: {
    success: {
      signIn: 'Sign in success',
      signUp: 'Sign up success',
      logout: 'Logouted',
      changePassword: 'Password has been changed',
      resetPassword: 'Password has been reset'
    },
    error: {
      authEmail: 'Email is not correct. Please try again',
      authPassword: 'Password is not correct. Please try again',
      emailExist: 'Email is already exist',
      logout: 'Logout failed',
      remove: 'Remove failed',
      api: 'Api network failed'
    }
  }
}

export default common_en
