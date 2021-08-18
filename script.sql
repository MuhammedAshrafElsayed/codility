
INSERT INTO `ci-fat`.REPORTING_CONFIGURATION
(REPORT_NAME, FREQUENCY_TYPE, FREQUENCY_DAY, BATCH_RUN_TIME, THRESHOLD_PARAM, THRESHOLD_VALUE, DATE_RANGE, EMAIL_IDS, FORMAT, MODIFIED_DATE, MODIFIED_BY, FLAG, OPERATOR_ID)
VALUES('', '', '', '', NULL, NULL, NULL, NULL, NULL, current_timestamp(3), '', NULL, 9);

INSERT INTO REPORTING_CONFIGURATION
(REPORT_NAME, FREQUENCY_TYPE, FREQUENCY_DAY, BATCH_RUN_TIME, THRESHOLD_PARAM, THRESHOLD_VALUE, DATE_RANGE, EMAIL_IDS, FORMAT, MODIFIED_DATE, MODIFIED_BY, FLAG, OPERATOR_ID)
VALUES
 ('low SIM Stock report', '', '', '', NULL, NULL, NULL, NULL, NULL, current_timestamp(3), '', NULL, 9);
,('Instant Mail Send', '', '', '', NULL, NULL, NULL, NULL, NULL, current_timestamp(3), '', NULL, 9);
,( 'fileUpload', 'Daily', '', '', '', NULL, NULL, NULL, NULL, NULL, current_timestamp(3), '', NULL, 9);
,( 'Reserved ESIM Profile Report', '', '', '', NULL, NULL, NULL, NULL, NULL, current_timestamp(3), '', NULL, 9);
,( 'Available ESIM Profile Report', '', '', '', NULL, NULL, NULL, NULL, NULL, current_timestamp(3), '', NULL, 9);
,( 'Unconfirmed ESIM Profile Download Report', '', '', '', NULL, NULL, NULL, NULL, NULL, current_timestamp(3), '', NULL, 9);
,( 'ESIM Profile Download Status Report', 'Daily', '', '', '', NULL, NULL, NULL, NULL, NULL, current_timestamp(3), '', NULL, 9);
