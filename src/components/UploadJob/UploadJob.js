import React from 'react'
import './style.css'

function UploadJob() {
  return (
    <div>
      <div class="formbold-main-wrapper">
        <div class="formbold-form-wrapper">
          {/* <img src="your-image-here.jpg" /> */}
          <form action="https://formbold.com/s/FORM_ID" method="POST">
            <div class="formbold-input-flex">
              <div>
                <label for="title" class="formbold-form-label"> Job Title </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  class="formbold-form-input"
                />
              </div>
              <div>
                <label for="company" class="formbold-form-label"> Company </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  class="formbold-form-input"
                />
              </div>
            </div>

            <div>
                <label for="description" class="formbold-form-label"> Job Description </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  class="formbold-form-input"
                />
            </div>

            <div class="formbold-mb-3">
              <label for="skills" class="formbold-form-label">
                Skills Required
              </label>
              <textarea
                rows="3"
                name="skills"
                id="skills"
                class="formbold-form-input"
              ></textarea>
            </div>
            
            <div class="formbold-mb-3">
              <label for="address" class="formbold-form-label"> Address </label>

              <input
                type="text"
                name="address"
                id="address"
                placeholder="City"
                class="formbold-form-input formbold-mb-3"
              />
              <input
                type="text"
                name="address2"
                id="address2"
                placeholder="State"
                class="formbold-form-input formbold-mb-3"
              />

              <input
                type="text"
                name="address3"
                id="address3"
                placeholder="Country"
                class="formbold-form-input formbold-mb-3"
              />
            </div>

            <div class="formbold-mb-3">
              <label for="responsibilities" class="formbold-form-label">
                Responsibilities of the Employee
              </label>
              <textarea
                rows="6"
                name="responsibilities"
                id="responsibilities"
                class="formbold-form-input"
              ></textarea>
            </div>

            <div class="formbold-mb-3 formbold-input-flex">
              <label for="salary" class="formbold-form-label"> Estimated Salary Range </label>

              <input
                type="number"
                name="salary"
                id="salary"
                placeholder="Min"
                class="formbold-form-input formbold-mb-3"
              />
              -
              <input
                type="number"
                name="salary2"
                id="salary2"
                placeholder="Max"
                class="formbold-form-input formbold-mb-3"
              />
            </div>

            <button class="formbold-btn">Upload Now</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UploadJob