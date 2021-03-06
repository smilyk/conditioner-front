export class Path {
  // static ADD_BOOK = 'conditioner/';

  static ADD_CONDITIONER_TO_DB = 'conditioner/';
  static GET_ALL_CONDITIONERS = 'conditioner/';
  static GET_CONDITIONER = 'conditioner/';
  static DELETE_CONDITIONER = 'conditioner/';
  static START_WORK_CONDITIONER = 'conditioner/start/';
  static GET_CONDITIONER_BY_INV_NUMBER = 'conditioner/inv-number/';
  static PUT_MAINTENANCE_TO_COND = 'conditioner/';
  static GET_ALL_NOT_DELETED_CONDITIONER = 'conditioner/not-deleted/';


  static ADD_TYPE_MAINTENANCE = 'maintenance/';
  static GET_ALL_MAINTENANCE = 'maintenance/';
  static GET_MAINTENANCE_BY_ID =  'maintenance/';
  static DELETE_TYPE_MAINTENANCE_BY_ID =  'maintenance/';
  static GET_ALL_NOT_DELETED_TYPE_MAINTENANCE = 'maintenance/not-deleted/';
  static GET_MISSED_PLANNING_TYPE_MAINTENANCE = 'planning/missed';
  static GET_TODAY_PLANNING_TYPE_MAINTENANCE = 'planning/';
  static GET_RECORD_BY_UUID = 'planning/plan/';
  static PLAN_RECORD = 'planning/plan/';

  static GET_NOT_BUSY_WORKERS_FOR_TYPE_MAINTENANCE = 'users/all-not-busy/';
  static ADD_ARTICLE = 'article/';
  static GET_PHOTO = 'article/photo/';
  static GET_ALL_ARTICLES = 'article/';
  static GET_ARTICLE_BY_UUID = 'article/';
  static GET_PLANNING_POWER = 'calculator';
}


