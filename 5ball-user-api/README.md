# API

This is the API for managing all concerns regarding courses.

Current functionality:

Return a full list of all invitations sent to the system
An invitation is an object, with a time stamp

Recieve phone numbers of invitees, and log them


## GET
/v1/invites
Array of invitation group Objects ex.
```
{
  "data": [
    {
      "invitation_id": 1,
      "created_at": "2016-01-20T08:52:13:952Z",
      "invitation_tee_time": "2016-02-14T20:12:00.000Z",
      "invitation_course": "tpc_harding",
      "user_group": [
        {
          "id": 1,
          "username": "+1(123)456-7890",
          "email": "",
          "invited_at": "2016-02-20T08:52:01.499Z",
          "created_at": "2016-01-20T08:52:01.499Z",
          "confirmed": true,
        },
        {
          "id": 2,
          "username": "+1(234)567-8901",
          "email": "",
          "invited_at": "2016-01-20T08:52:13.952Z",
          "created_at": "2016-01-20T08:52:13.952Z",
          "confirmed": false
        },
        {
          "id": 3,
          "username": "+1(345)567-8901",
          "email": "",
          "invited_at": "2016-01-20T08:52:13.952Z",
          "created_at": "2016-01-20T08:52:13.952Z",
          "confirmed": false
        },
	{
          "id": 4,
          "username": "+1(456)567-8901",
          "email": "",
          "invited_at": "2016-01-20T08:52:13.952Z",
          "created_at": "2016-01-20T08:52:13.952Z",
          "confirmed": false
        }
      ]
    }
  ]
}
```

/v1/users
Array of Object of the form

```
    {
      "id": 1,
      "user_id": 1,
      "teetime_history": ["2016-02-14T20:12:00.000Z"],
      "created_at": "2016-01-20T08:53:16.402Z",
      "id": 1,
      "username": "+1(345)567-8901",
    }
```

## POST
/v1/invites

Takes x-www-form-urlencoded with two fields
```
user_id : [string] 
teetime: [UTC date]
invitees: Array<string>
invitation_course: [string]
```
ex.
```
user_id : [+1(123)456-7890]
teetime: 2016-02-14T20:12:54.000Z
invitees: ["+1(234)456-7890","(234)456-7890","(234)567-8901","(345)678-9012"]
invitation_course: "tpc_harding"
```

/v1/users

Takes x-www-form-urlencoded with two fields
```
username : [string]
email : [string]
password : [string]
```
ex.
```
username : "+1(234)567-8901"
email : ""
password : null
```

## Running Locally, with locally installed nodal

```sh
npm run nodal -- s
```

Course API should now be available at [localhost:3000](http://localhost:3000/).


