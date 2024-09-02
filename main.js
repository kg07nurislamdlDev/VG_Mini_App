function navigateTo(page) {
  switch (page) {
    case 'home':
      window.location.href = 'home.html';
      break;
    case 'apps':
      window.location.href = 'apps/apps.html';
      break;
    case 'chat':
      window.location.href = 'chat/chat.html';
      break;
    case 'profile':
      window.location.href = 'profile/profile.html';
      break;
    default:
      console.log('Unknown page: ' + page);
  }
}