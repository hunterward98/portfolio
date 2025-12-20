# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.1].define(version: 2025_12_20_234336) do
  create_table "abouts", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.text "summary"
    t.datetime "updated_at", null: false
  end

  create_table "educations", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.string "credential_id"
    t.string "degree"
    t.string "graduation_date"
    t.text "honors"
    t.string "location"
    t.text "minors"
    t.string "school"
    t.datetime "updated_at", null: false
    t.string "verification_url"
  end

  create_table "experiences", force: :cascade do |t|
    t.string "company"
    t.datetime "created_at", null: false
    t.string "end_date"
    t.string "location"
    t.string "position"
    t.text "responsibilities"
    t.string "start_date"
    t.datetime "updated_at", null: false
  end

  create_table "profiles", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.string "email"
    t.string "github"
    t.string "linkedin"
    t.string "location"
    t.string "name"
    t.string "title"
    t.datetime "updated_at", null: false
  end

  create_table "projects", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.text "description"
    t.string "github_url"
    t.string "live_url"
    t.string "name"
    t.text "technologies"
    t.datetime "updated_at", null: false
  end

  create_table "skills", force: :cascade do |t|
    t.string "category"
    t.datetime "created_at", null: false
    t.text "items"
    t.datetime "updated_at", null: false
  end
end
